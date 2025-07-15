import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if user already has a faculty profile
    const existingFaculty = await prisma.faculty.findUnique({
      where: { userId: session.userId }
    })

    if (existingFaculty) {
      return NextResponse.json(
        { message: 'Faculty profile already exists' },
        { status: 400 }
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

    // Validate required fields
    if (!name || !title || !description || !department || !email || !expertise || !about) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create faculty profile
    const faculty = await prisma.faculty.create({
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
        userId: session.userId,
      }
    })

    return NextResponse.json({
      message: 'Faculty profile created successfully',
      faculty
    })
  } catch (error) {
    console.error('Create faculty profile error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
