'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { GraduationCap, Eye, EyeOff, UserPlus, ArrowLeft } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { PasswordStrength } from '@/components/password-strength'

const registrationSchema = z.object({
  // Account credentials
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string(),
  
  // Faculty profile information
  name: z.string().min(2, 'Name must be at least 2 characters'),
  title: z.string().min(2, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  department: z.string().min(1, 'Department is required'),
  phone: z.string().optional(),
  linkedin: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  twitter: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  about: z.string().min(50, 'About section must be at least 50 characters'),
  expertise: z.string().min(5, 'Please list your areas of expertise'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type RegistrationFormValues = z.infer<typeof registrationSchema>

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      title: '',
      description: '',
      department: 'MCA',
      phone: '',
      linkedin: '',
      twitter: '',
      about: '',
      expertise: '',
    },
  })

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsLoading(true)
    try {
      // Convert expertise string to array
      const expertiseArray = data.expertise.split(',').map(item => item.trim()).filter(Boolean)
      
      const registrationData = {
        email: data.email,
        password: data.password,
        faculty: {
          name: data.name,
          title: data.title,
          description: data.description,
          department: data.department,
          email: data.email,
          phone: data.phone || null,
          linkedin: data.linkedin || null,
          twitter: data.twitter || null,
          about: data.about,
          expertise: expertiseArray,
        }
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      })

      if (response.ok) {
        toast.success('Registration successful! Welcome to the MCA Faculty system.')
        router.push('/dashboard')
      } else {
        const error = await response.json()
        toast.error(error.message || 'Registration failed')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mca-page-container flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-2xl">
        <Card className="mca-card shadow-lg">
          <CardHeader className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-10 w-10 text-primary" />
                <span className="mca-heading-2 text-primary">
                  MCA Faculty Registration
                </span>
              </div>
            </div>
            <div>
              <CardTitle className="mca-heading-2">Join Our Faculty</CardTitle>
              <CardDescription className="mca-text-base mt-2">
                Create your account and complete your faculty profile to get started
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Account Credentials Section */}
                <div className="space-y-4">
                  <h3 className="mca-heading-3 text-primary border-b border-border pb-2">
                    Account Information
                  </h3>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mca-text-base font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@moderncoe.edu.in"
                            type="email"
                            className="mca-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mca-text-base font-medium">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="Create a strong password"
                                type={showPassword ? 'text' : 'password'}
                                className="mca-input pr-10"
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-muted-foreground hover:text-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </FormControl>
                          <PasswordStrength password={field.value} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mca-text-base font-medium">Confirm Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="Confirm your password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="mca-input pr-10"
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-muted-foreground hover:text-foreground"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Faculty Profile Section */}
                <div className="space-y-4">
                  <h3 className="mca-heading-3 text-primary border-b border-border pb-2">
                    Faculty Profile Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mca-text-base font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. John Doe" className="mca-input" {...field} />
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
                          <FormLabel className="mca-text-base font-medium">Academic Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Professor, Associate Professor, etc." className="mca-input" {...field} />
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
                        <FormLabel className="mca-text-base font-medium">Short Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of your specialization" className="mca-input" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mca-text-base font-medium">Department</FormLabel>
                          <FormControl>
                            <Input placeholder="MCA" className="mca-input" {...field} />
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
                          <FormLabel className="mca-text-base font-medium">Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 (020) 2569-6064" className="mca-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mca-text-base font-medium">LinkedIn Profile (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/yourprofile" className="mca-input" {...field} />
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
                          <FormLabel className="mca-text-base font-medium">Twitter Profile (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://twitter.com/yourhandle" className="mca-input" {...field} />
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
                        <FormLabel className="mca-text-base font-medium">Areas of Expertise</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Machine Learning, Data Science, Artificial Intelligence (comma-separated)" 
                            className="mca-input"
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
                        <FormLabel className="mca-text-base font-medium">About</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write a detailed description about yourself, your background, research interests, and academic journey..."
                            className="min-h-[120px] mca-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                  <Button type="button" variant="outline" asChild className="mca-button-outline">
                    <Link href="/login">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Login
                    </Link>
                  </Button>
                  <Button type="submit" disabled={isLoading} className="mca-button-primary">
                    {isLoading ? (
                      'Creating Account...'
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Create Account & Profile
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
