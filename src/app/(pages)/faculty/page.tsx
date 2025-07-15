'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Search, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  GraduationCap,
  BookOpen,
  FileText,
  Loader2
} from 'lucide-react'
import Link from 'next/link'

interface Faculty {
  id: string
  name: string
  title: string
  description: string
  department: string
  email: string
  phone?: string
  linkedin?: string
  twitter?: string
  expertise: string[]
  about: string
  avatar?: string
  qualifications: any[]
  courses: any[]
  publications: any[]
}

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([])
  const [filteredFaculty, setFilteredFaculty] = useState<Faculty[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch('/api/faculty')
        if (response.ok) {
          const data = await response.json()
          setFaculty(data)
          setFilteredFaculty(data)
        }
      } catch (error) {
        console.error('Error fetching faculty:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFaculty()
  }, [])

  useEffect(() => {
    let filtered = faculty

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(f => 
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by department
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(f => f.department === selectedDepartment)
    }

    setFilteredFaculty(filtered)
  }, [faculty, searchTerm, selectedDepartment])

  const departments = Array.from(new Set(faculty.map(f => f.department)))

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading faculty...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mca-heading-1 text-primary mb-4">Our Faculty</h1>
          <p className="mca-text-large text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished faculty members who bring expertise, innovation, and dedication 
            to the Modern College of Engineering MCA program.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search faculty by name, title, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background"
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Faculty Grid */}
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-muted-foreground mb-2">
              No faculty found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((member) => (
              <Card key={member.id} className="mca-card hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar || ''} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="mca-heading-3 text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-center">
                    <p className="font-medium">{member.title}</p>
                    <Badge variant="secondary" className="mt-1">{member.department}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {member.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {member.qualifications.length} Qualifications
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {member.courses.length} Courses
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-3 w-3 mr-1" />
                      {member.publications.length} Publications
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h5 className="text-xs font-medium mb-2">Areas of Expertise</h5>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.expertise.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex space-x-2">
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/faculty/${member.id}`}>
                        View Profile
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
