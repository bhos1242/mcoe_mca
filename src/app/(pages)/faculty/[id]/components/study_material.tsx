'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, BookOpen, Presentation, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { Faculty } from '../data/facultyData'

interface StudyMaterialProps {
  faculty: Faculty
}

export default function StudyMaterial({ faculty }: StudyMaterialProps) {
  // Check if faculty has courses and materials before accessing them
  const hasValidCourseData = faculty.courses && 
                             faculty.courses.length > 0 && 
                             faculty.courses[0].materials && 
                             faculty.courses[0].materials.length > 0;
  
  const [activeTab, setActiveTab] = useState(
    hasValidCourseData ? faculty.courses[0].materials[0].unit : ''
  );

  // If no valid course data, show a message
  if (!hasValidCourseData) {
    return (
      <div className="space-y-8">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Study Materials
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            No study materials are currently available for this faculty member.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Study Materials
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {faculty.courses.map((course, courseIndex) => (
          <motion.div
            key={courseIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {course.courseName}
                  </h3>
                </div>

                <div className="space-y-4">
                  {course.materials && course.materials.length > 0 ? course.materials.map((material, materialIndex) => (
                    <div key={materialIndex} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-gray-500" />
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {material.unit}
                        </h4>
                      </div>

                      <div className="pl-7 space-y-2">
                        {material.topics && material.topics.length > 0 ? material.topics.map((topic, topicIndex) => (
                          <a
                            key={topicIndex}
                            href={topic.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>{topic.title}</span>
                          </a>
                        )) : (
                          <p className="text-gray-500 dark:text-gray-400 text-sm">No topics available</p>
                        )}
                      </div>
                    </div>
                  )) : (
                    <p className="text-gray-500 dark:text-gray-400">No materials available for this course</p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

