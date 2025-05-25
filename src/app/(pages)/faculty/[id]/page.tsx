"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import FacultyProfile from './components/facuilty-profile'
import Study_material from './components/study_material'
import Research from './components/research'
import ExtensionOutreach from './components/extension_outreach'
import HighlightsSection from './components/highlights'
import HeroSection from './components/hero_section'
import BlogsPage from './components/blogs'
import { Faculty, facultyData } from './data/facultyData'

export default function FacultyPage() {
  const params = useParams<{
    id: string
  }>()
  const [faculty, setFaculty] = useState<Faculty|null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params || !params.id) {
      setLoading(false)
      return
    }

    const fetchFacultyData = () => {
      const foundFaculty = facultyData.find(f => f.id.toLowerCase() === params.id.toLowerCase())
      if (foundFaculty) {
        setFaculty(foundFaculty as any)
      }
      setLoading(false)
    }

    fetchFacultyData()
  }, [params])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
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
    avatar: faculty.avatar,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div variants={itemVariants}>
          <HeroSection {...heroData} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <HighlightsSection />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FacultyProfile faculty={faculty} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Study_material faculty={faculty} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Research researchData={faculty.research} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <ExtensionOutreach outreachActivities={faculty.outreachActivities} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <BlogsPage blogPosts={faculty.blogPosts} />
        </motion.div>
      </div>
    </motion.div>
  );
}