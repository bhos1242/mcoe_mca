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

    // Check if email exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    const isAvailable = !existingUser

    return NextResponse.json({
      available: isAvailable,
      message: isAvailable
        ? 'Email is available'
        : 'Email is already registered'
    })
  } catch (error) {
    console.error('Check email error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
