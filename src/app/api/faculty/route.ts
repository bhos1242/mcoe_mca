import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const faculty = await prisma.faculty.findMany({
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
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(faculty)
  } catch (error) {
    console.error('Get all faculty error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
