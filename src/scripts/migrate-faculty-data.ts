import { PrismaClient } from '@prisma/client'
import { facultyData } from '../app/(pages)/faculty/[id]/data/facultyData'
import { hashPassword } from '../lib/auth'

const prisma = new PrismaClient()

async function migrateFacultyData() {
  console.log('Starting faculty data migration...')

  try {
    for (const faculty of facultyData) {
      console.log(`Migrating faculty: ${faculty.name}`)

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

      // Create qualifications
      for (const qualification of faculty.qualifications) {
        await prisma.qualification.create({
          data: {
            degree: qualification.degree,
            school: qualification.school,
            year: qualification.year,
            facultyId: createdFaculty.id,
          }
        })
      }

      // Create certifications
      for (const certification of faculty.certifications) {
        await prisma.certification.create({
          data: {
            name: certification,
            facultyId: createdFaculty.id,
          }
        })
      }

      // Create experiences
      for (const experience of faculty.experience) {
        await prisma.experience.create({
          data: {
            title: experience.title,
            company: experience.company,
            period: experience.period,
            facultyId: createdFaculty.id,
          }
        })
      }

      // Create courses with materials and topics
      for (const course of faculty.courses) {
        const createdCourse = await prisma.course.create({
          data: {
            courseName: course.courseName,
            courseId: course.courseId,
            facultyId: createdFaculty.id,
          }
        })

        for (const material of course.materials) {
          const createdMaterial = await prisma.material.create({
            data: {
              unit: material.unit,
              icon: material.icon,
              courseId: createdCourse.id,
            }
          })

          for (const topic of material.topics) {
            await prisma.topic.create({
              data: {
                title: topic.title,
                link: topic.link,
                materialId: createdMaterial.id,
              }
            })
          }
        }
      }

      // Create research projects
      for (const project of faculty.research.projects) {
        await prisma.researchProject.create({
          data: {
            title: project.title,
            description: project.description,
            link: project.link,
            facultyId: createdFaculty.id,
          }
        })
      }

      // Create publications
      for (const publication of faculty.research.publications) {
        await prisma.publication.create({
          data: {
            title: publication.title,
            journal: publication.journal,
            year: publication.year,
            link: publication.link,
            facultyId: createdFaculty.id,
          }
        })
      }

      // Create outreach activities
      for (const activity of faculty.outreachActivities) {
        await prisma.outreachActivity.create({
          data: {
            title: activity.title,
            description: activity.description,
            image: activity.image,
            date: activity.date,
            participants: activity.participants,
            facultyId: createdFaculty.id,
          }
        })
      }

      // Create blog posts
      for (const blogPost of faculty.blogPosts) {
        await prisma.blogPost.create({
          data: {
            id: blogPost.id,
            title: blogPost.title,
            excerpt: blogPost.excerpt,
            date: blogPost.date,
            category: blogPost.category,
            facultyId: createdFaculty.id,
          }
        })
      }

      console.log(`✅ Successfully migrated faculty: ${faculty.name}`)
    }

    console.log('✅ Faculty data migration completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the migration
migrateFacultyData()
