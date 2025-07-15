const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createTestUser() {
  console.log('Creating test user...')

  try {
    // Check if test user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'test@moderncoe.edu.in' }
    })

    if (existingUser) {
      console.log('Test user already exists')
      return
    }

    // Create test user
    const hashedPassword = await bcrypt.hash('test123', 12)
    
    const user = await prisma.user.create({
      data: {
        email: 'test@moderncoe.edu.in',
        password: hashedPassword,
      }
    })

    console.log('✅ Test user created successfully!')
    console.log('Email: test@moderncoe.edu.in')
    console.log('Password: test123')
    console.log('You can now login and create a faculty profile.')
  } catch (error) {
    console.error('❌ Failed to create test user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createTestUser()
