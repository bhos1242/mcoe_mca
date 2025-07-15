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

    // Check if user already has a faculty profile
    const existingUser = await prisma.user.findUnique({
      where: { id: session.userId },
      include: { faculty: true }
    })

    if (existingUser?.faculty) {
      return NextResponse.json(
        { message: 'Faculty profile already exists' },
        { status: 400 }
      )
    }

    // Create faculty profile
    const faculty = await prisma.faculty.create({
      data: {
        name,
        title,
        description,
        department: department || 'MCA',
        email,
        phone: phone || null,
        linkedin: linkedin || null,
        twitter: twitter || null,
        about,
        expertise: expertise || [],
        avatar: null, // Will be added later when image upload is implemented
      }
    })

    // Link faculty profile to user
    await prisma.user.update({
      where: { id: session.userId },
      data: { facultyId: faculty.id }
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
