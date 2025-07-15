import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword, createSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password, faculty } = await request.json()

    // Validate required fields
    if (!email || !password || !faculty) {
      return NextResponse.json(
        { message: 'Email, password, and faculty information are required' },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        { message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number' },
        { status: 400 }
      )
    }

    // Validate faculty information
    const requiredFacultyFields = ['name', 'title', 'description', 'department', 'about', 'expertise']
    for (const field of requiredFacultyFields) {
      if (!faculty[field]) {
        return NextResponse.json(
          { message: `Faculty ${field} is required` },
          { status: 400 }
        )
      }
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Check if faculty email already exists
    const existingFaculty = await prisma.faculty.findUnique({
      where: { email }
    })

    if (existingFaculty) {
      return NextResponse.json(
        { message: 'A faculty profile with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user and faculty profile in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
        }
      })

      // Create faculty profile
      const facultyProfile = await tx.faculty.create({
        data: {
          name: faculty.name,
          title: faculty.title,
          description: faculty.description,
          department: faculty.department,
          email: faculty.email || email, // Use provided email or fallback to user email
          phone: faculty.phone || null,
          linkedin: faculty.linkedin || null,
          twitter: faculty.twitter || null,
          about: faculty.about,
          expertise: Array.isArray(faculty.expertise) ? faculty.expertise : [],
          avatar: null, // Will be added later when image upload is implemented
        }
      })

      // Link faculty profile to user
      await tx.user.update({
        where: { id: user.id },
        data: { facultyId: facultyProfile.id }
      })

      return { user, facultyProfile }
    })

    // Create session for the new user
    await createSession(result.user.id, result.user.email)

    return NextResponse.json({
      message: 'Registration successful',
      user: {
        id: result.user.id,
        email: result.user.email,
        faculty: {
          id: result.facultyProfile.id,
          name: result.facultyProfile.name,
          title: result.facultyProfile.title,
          department: result.facultyProfile.department,
        }
      }
    })
  } catch (error) {
    console.error('Registration error:', error)

    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { message: 'An account with this email already exists' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
