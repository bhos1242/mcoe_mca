const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

// Faculty data (simplified version for migration)
const facultyData = [
  {
    id: "pradnya_muley",
    name: "Dr. Pradnya Muley",
    title: "Head Of Department, Department of MCA",
    description: "Specialist in Artificial Intelligence, Machine Learning, and Data Science",
    department: "MCA",
    avatar: "/images/profiles/pradnya_muley.jpg",
    email: "pradnya.muley@moderncoe.edu.in",
    phone: "+91 (020) 2569-6064",
    linkedin: "https://www.linkedin.com/in/drpradnyamuley",
    twitter: "https://twitter.com/DrPradnyaMuley",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    about: "Dr. Pradnya Muley is the Head of Department for MCA at Modern College of Engineering. She is a distinguished researcher with expertise in artificial intelligence and machine learning, focusing on innovative solutions for natural language processing and computer vision. With over 20 years of experience, Dr. Muley has contributed significantly to AI advancements and their application across industries.",
    qualifications: [
      { degree: "Ph.D. in Computer Science", school: "Pune University", year: "2000" },
      { degree: "M.Sc. IT", school: "Savitribai Phule Pune University", year: "2010" },
      { degree: "MCA", school: "Pune University", year: "2005" },
    ],
    certifications: [
      "IBM Certified Data Scientist",
      "Microsoft Certified: Azure AI Engineer Associate",
      "Certified Professional in Machine Learning (CPML)",
    ],
    experience: [
      {
        title: "HOD, Department of MCA",
        company: "Modern College of Engineering, Pune",
        period: "2018 - Present",
      },
      {
        title: "Associate Professor",
        company: "Modern College of Engineering, Pune",
        period: "2012 - 2018",
      },
    ],
    courses: [
      {
        courseName: "Artificial Intelligence",
        courseId: "AI101",
        materials: [
          {
            unit: "UNIT 1: Introduction to Artificial Intelligence",
            icon: "BookOpen",
            topics: [
              {
                title: "Introduction to AI",
                link: "https://drive.google.com/file/d/1aM7_78tYYZmMSmpAuWoIkLCPX-y23fMg/view",
              },
            ],
          },
        ],
      },
    ],
    research: {
      projects: [
        {
          title: "AI in Healthcare",
          description: "Developing AI-based solutions for early detection of chronic diseases.",
          link: "https://example.com/project1",
        },
      ],
      publications: [
        {
          title: "A Survey of Transfer Learning Techniques in Natural Language Processing",
          journal: "Journal of Artificial Intelligence Research",
          year: 2022,
          link: "https://example.com/publication1",
        },
      ],
    },
    outreachActivities: [
      {
        title: 'AI for Social Good Workshop',
        description: 'A hands-on workshop introducing AI concepts to high school students.',
        image: '/images/outreach-activities/ai-workshop.webp',
        date: '2023-09-15',
        participants: 50,
      },
    ],
    blogPosts: [
      {
        id: "1",
        title: 'The Future of AI in Healthcare',
        excerpt: 'Exploring the potential applications and ethical considerations of AI in medical diagnosis.',
        date: '2023-05-15',
        category: 'Healthcare',
      },
    ],
  },
  {
    id: "smita_sontakke",
    name: "Dr. Smita Sontakke",
    title: "Assistant Professor",
    description: "Specialist in Data Science and Machine Learning",
    department: "MCA",
    avatar: "/profile-picture.jpg",
    email: "smita.sontakke@moderncoe.edu.in",
    phone: "+91 (020) 2569-6064",
    linkedin: "https://www.linkedin.com/in/smitasontakke",
    twitter: "https://twitter.com/SmitaSontakke",
    expertise: ["Data Science", "Machine Learning", "Big Data"],
    about: "Dr. Smita Sontakke is an Assistant Professor in the Department of MCA at Modern College of Engineering. She is a dedicated educator and researcher with a focus on data science and machine learning applications.",
    qualifications: [
      { degree: "Ph.D. in Computer Science", school: "Pune University", year: "2015" },
      { degree: "M.Sc. IT", school: "Savitribai Phule Pune University", year: "2010" },
    ],
    certifications: [
      "Certified Data Scientist",
      "Certified Machine Learning Engineer",
    ],
    experience: [
      {
        title: "Assistant Professor",
        company: "Modern College of Engineering, Pune",
        period: "2015 - Present",
      },
    ],
    courses: [],
    research: {
      projects: [],
      publications: [],
    },
    outreachActivities: [],
    blogPosts: [],
  }
]

async function hashPassword(password) {
  return bcrypt.hash(password, 12)
}

async function migrateFacultyData() {
  console.log('Starting faculty data migration...')

  try {
    for (const faculty of facultyData) {
      console.log(`Migrating faculty: ${faculty.name}`)

      // Check if faculty already exists
      const existingFaculty = await prisma.faculty.findUnique({
        where: { id: faculty.id }
      })

      if (existingFaculty) {
        console.log(`Faculty ${faculty.name} already exists, skipping...`)
        continue
      }

      // Create user account for faculty
      const hashedPassword = await hashPassword('faculty123') // Default password
      
      const user = await prisma.user.create({
        data: {
          email: faculty.email,
          password: hashedPassword,
        }
      })

      // Create faculty profile
      const createdFaculty = await prisma.faculty.create({
        data: {
          id: faculty.id,
          name: faculty.name,
          title: faculty.title,
          description: faculty.description,
          department: faculty.department,
          avatar: faculty.avatar,
          email: faculty.email,
          phone: faculty.phone,
          linkedin: faculty.linkedin,
          twitter: faculty.twitter,
          expertise: faculty.expertise,
          about: faculty.about,
        }
      })

      // Link user to faculty
      await prisma.user.update({
        where: { id: user.id },
        data: { facultyId: createdFaculty.id }
      })

      console.log(`✅ Successfully migrated faculty: ${faculty.name}`)
    }

    console.log('✅ Faculty data migration completed successfully!')
    console.log('Default login credentials for all faculty: password = "faculty123"')
  } catch (error) {
    console.error('❌ Migration failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the migration
migrateFacultyData()
