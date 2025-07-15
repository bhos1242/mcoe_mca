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
        qualifications: true,
        certifications: true,
        experiences: true,
        courses: {
          include: {
            materials: {
              include: {
                topics: true
              }
            }
          }
        },
        researchProjects: true,
        publications: true,
        outreachActivities: true,
        blogPosts: true,
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
      about,
      expertise,
    } = data

    const updatedFaculty = await prisma.faculty.update({
      where: { id },
      data: {
        name,
        title,
        description,
        department,
        email,
        phone: phone || null,
        linkedin: linkedin || null,
        twitter: twitter || null,
        about,
        expertise: expertise || [],
      }
    })

    return NextResponse.json({
      message: 'Faculty profile updated successfully',
      faculty: updatedFaculty
    })
  } catch (error) {
    console.error('Update faculty error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
