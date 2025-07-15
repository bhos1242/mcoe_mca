import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    // Check if faculty email already exists
    const existingFaculty = await prisma.faculty.findUnique({
      where: { email }
    })

    const isAvailable = !existingUser && !existingFaculty

    return NextResponse.json({
      available: isAvailable,
      message: isAvailable
        ? 'Email is available'
        : 'An account with this email already exists'
    })
  } catch (error) {
    console.error('Email check error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
