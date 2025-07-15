'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Mail, Phone, Linkedin, Twitter, ExternalLink } from 'lucide-react'

interface FacultyMember {
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
}

export default function FacultyDirectoryPage() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch('/api/faculty')
        if (response.ok) {
          const facultyData = await response.json()
          setFaculty(facultyData)
        }
      } catch (error) {
        console.error('Error fetching faculty:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFaculty()
  }, [])

  if (loading) {
    return (
      <div className="mca-page-container flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="mca-page-container">
      <div className="mca-content-wrapper">
        <div className="text-center mb-12">
          <h1 className="mca-heading-1 mb-4">
            MCA Faculty Directory
          </h1>
          <p className="mca-text-large text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished faculty members who are dedicated to excellence in computer applications education and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div key={member.id}>
              <Card className="mca-card h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage 
                        src={member.avatar || '/images/default-avatar.jpg'} 
                        alt={member.name} 
                      />
                      <AvatarFallback className="text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="mca-heading-3">{member.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {member.title}
                  </CardDescription>
                  <p className="mca-text-small mt-2">
                    {member.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {member.expertise.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{member.expertise.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mca-text-small">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    {member.phone && (
                      <div className="flex items-center space-x-2 mca-text-small">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <div className="flex space-x-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <Link
                      href={`/faculty/${member.id}`}
                      className="inline-flex items-center space-x-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {faculty.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="mca-text-large text-muted-foreground">No faculty members found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
