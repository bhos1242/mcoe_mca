import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const faculty = await prisma.faculty.findUnique({
      where: { id },
      include: {
        qualifications: {
          orderBy: { year: 'desc' }
        },
        certifications: {
          orderBy: { year: 'desc' }
        },
        experiences: {
          orderBy: { startYear: 'desc' }
        },
        courses: {
          include: {
            materials: {
              include: {
                topics: true
              }
            }
          },
          orderBy: { title: 'asc' }
        },
        researchProjects: {
          orderBy: { startDate: 'desc' }
        },
        publications: {
          orderBy: { year: 'desc' }
        },
        outreachActivities: {
          orderBy: { date: 'desc' }
        },
        blogPosts: {
          orderBy: { createdAt: 'desc' }
        },
      }
    })

    if (!faculty) {
      return NextResponse.json(
        { message: 'Faculty not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(faculty)
  } catch (error) {
    console.error('Get faculty error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if user owns this faculty profile
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
      include: { faculty: true }
    })

    if (!user?.faculty || user.faculty.id !== id) {
      return NextResponse.json(
        { message: 'Forbidden' },
        { status: 403 }
      )
    }

    const data = await request.json()
    const {
      name,
      title,
      description,
      department,
      email,
      phone,
      linkedin,
      twitter,
      expertise,
      about
    } = data

    const faculty = await prisma.faculty.update({
      where: { id },
      data: {
        name,
        title,
        description,
        department,
        email,
        phone,
        linkedin,
        twitter,
        expertise,
        about,
      }
    })

    return NextResponse.json({
      message: 'Faculty profile updated successfully',
      faculty
    })
  } catch (error) {
    console.error('Update faculty error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
