"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import FacultyProfile from './components/facuilty-profile'
import Study_material from './components/study_material'
import Research from './components/research'
import ExtensionOutreach from './components/extension_outreach'
import HighlightsSection from './components/highlights'
import HeroSection from './components/hero_section'
import BlogsPage from './components/blogs'

// Updated Faculty interface to match database structure
interface Faculty {
  id: string
  name: string
  title: string
  description: string
  department: string
  avatar: string | null
  email: string
  phone: string | null
  linkedin: string | null
  twitter: string | null
  expertise: string[]
  about: string
  qualifications: Array<{
    id: string
    degree: string
    school: string
    year: string
  }>
  certifications: Array<{
    id: string
    name: string
  }>
  experiences: Array<{
    id: string
    title: string
    company: string
    period: string
  }>
  experience: Array<{
    title: string
    company: string
    period: string
  }>
  courses: Array<{
    id: string
    courseName: string
    courseId: string
    materials: Array<{
      id: string
      unit: string
      icon: string
      topics: Array<{
        id: string
        title: string
        link: string
      }>
    }>
  }>
  researchProjects: Array<{
    id: string
    title: string
    description: string
    link: string | null
  }>
  publications: Array<{
    id: string
    title: string
    journal: string
    year: number
    link: string | null
  }>
  outreachActivities: Array<{
    id: string
    title: string
    description: string
    image: string | null
    date: string
    participants: number
  }>
  blogPosts: Array<{
    id: string
    title: string
    excerpt: string
    date: string
    category: string
  }>
}

export default function FacultyPage() {
  const params = useParams<{
    id: string
  }>()
  const [faculty, setFaculty] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params || !params.id) {
      setLoading(false)
      return
    }

    const fetchFacultyData = async () => {
      try {
        const response = await fetch(`/api/faculty/${params.id}`)
        if (response.ok) {
          const facultyData = await response.json()
          // Transform the data to match the expected format for existing components
          const transformedFaculty = {
            ...facultyData,
            // Ensure avatar is not null
            avatar: facultyData.avatar || '/images/default-avatar.jpg',
            // Ensure phone, linkedin, twitter are not null
            phone: facultyData.phone || '',
            linkedin: facultyData.linkedin || '',
            twitter: facultyData.twitter || '',
            // Transform research data to match existing component expectations
            research: {
              projects: facultyData.researchProjects || [],
              publications: facultyData.publications || []
            },
            // Transform certifications array
            certifications: facultyData.certifications?.map((cert: any) => cert.name) || [],
            // Transform experiences to match existing format
            experience: facultyData.experiences || []
          }
          setFaculty(transformedFaculty)
        } else {
          setFaculty(null)
        }
      } catch (error) {
        console.error('Error fetching faculty data:', error)
        setFaculty(null)
      } finally {
        setLoading(false)
      }
    }

    fetchFacultyData()
  }, [params])

  if (loading) {
    return (
      <div className="mca-page-container flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!faculty) {
    notFound()
  }

  const heroData = {
    name: faculty.name,
    title: faculty.title,
    description: faculty.description,
    avatar: faculty.avatar || '/images/default-avatar.jpg',
  };

  return (
    <div className="mca-page-container">
      <div className="max-w-7xl mx-auto space-y-12 p-4 sm:p-6 lg:p-8">
        <div>
          <HeroSection {...heroData} />
        </div>

        <div>
          <HighlightsSection />
        </div>

        <div>
          <FacultyProfile faculty={faculty} />
        </div>

        <div>
          <Study_material faculty={faculty} />
        </div>

        <div>
          <Research researchData={faculty.research} />
        </div>

        <div>
          <ExtensionOutreach outreachActivities={faculty.outreachActivities} />
        </div>

        <div>
          <BlogsPage blogPosts={faculty.blogPosts} />
        </div>
      </div>
    </div>
  );
}