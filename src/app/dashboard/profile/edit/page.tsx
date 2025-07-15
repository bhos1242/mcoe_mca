'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toast } from 'react-hot-toast'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import Link from 'next/link'

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  title: z.string().min(2, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  department: z.string().min(1, 'Department is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  linkedin: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  twitter: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  about: z.string().min(50, 'About section must be at least 50 characters'),
  expertise: z.string().min(5, 'Please list your areas of expertise'),
})

type ProfileFormValues = z.infer<typeof profileSchema>

export default function EditProfilePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [facultyId, setFacultyId] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      title: '',
      description: '',
      department: 'MCA',
      email: '',
      phone: '',
      linkedin: '',
      twitter: '',
      about: '',
      expertise: '',
    },
  })

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // First get the current user's faculty profile
        const response = await fetch('/api/auth/me')
        if (!response.ok) {
          throw new Error('Failed to fetch user data')
        }
        
        const userData = await response.json()
        if (!userData.faculty) {
          toast.error('No faculty profile found')
          router.push('/dashboard/profile/create')
          return
        }

        setFacultyId(userData.faculty.id)
        
        // Then fetch the full faculty data
        const facultyResponse = await fetch(`/api/faculty/${userData.faculty.id}`)
        if (!facultyResponse.ok) {
          throw new Error('Failed to fetch faculty data')
        }
        
        const facultyData = await facultyResponse.json()
        
        // Populate form with existing data
        form.reset({
          name: facultyData.name || '',
          title: facultyData.title || '',
          description: facultyData.description || '',
          department: facultyData.department || 'MCA',
          email: facultyData.email || '',
          phone: facultyData.phone || '',
          linkedin: facultyData.linkedin || '',
          twitter: facultyData.twitter || '',
          about: facultyData.about || '',
          expertise: facultyData.expertise?.join(', ') || '',
        })
      } catch (error) {
        console.error('Error fetching profile:', error)
        toast.error('Failed to load profile data')
      } finally {
        setIsLoadingData(false)
      }
    }

    fetchProfile()
  }, [form, router])

  const onSubmit = async (data: ProfileFormValues) => {
    if (!facultyId) {
      toast.error('Faculty ID not found')
      return
    }

    setIsLoading(true)
    try {
      // Convert expertise string to array
      const expertiseArray = data.expertise.split(',').map(item => item.trim()).filter(Boolean)
      
      const profileData = {
        ...data,
        expertise: expertiseArray,
      }

      const response = await fetch(`/api/faculty/${facultyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      })

      if (response.ok) {
        toast.success('Profile updated successfully!')
        router.push('/dashboard')
      } else {
        const error = await response.json()
        toast.error(error.message || 'Failed to update profile')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading profile data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="mca-card p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild className="mca-button-outline">
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="mca-heading-1 text-primary">Edit Faculty Profile</h1>
            <p className="mca-text-large text-muted-foreground mt-2">
              Update your academic profile information
            </p>
          </div>
        </div>
      </div>

      <Card className="mca-card">
        <CardHeader>
          <CardTitle className="mca-heading-2 text-primary">Profile Information</CardTitle>
          <CardDescription className="mca-text-base">
            Update your faculty information that will be displayed on your public profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Dr. John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Academic Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Professor, Associate Professor, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Brief description of your specialization" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@moderncoe.edu.in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 (020) 2569-6064" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter Profile (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://twitter.com/yourhandle" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Areas of Expertise</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Machine Learning, Data Science, Artificial Intelligence (comma-separated)" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write a detailed description about yourself, your background, research interests, and academic journey..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" asChild>
                  <Link href="/dashboard">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Update Profile
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
