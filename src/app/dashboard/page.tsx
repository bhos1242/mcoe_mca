import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Users, 
  TrendingUp,
  Plus,
  Edit,
  Eye
} from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getSession()
  
  if (!session) {
    return null
  }

  // Get user with faculty profile
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      faculty: {
        include: {
          qualifications: true,
          certifications: true,
          experiences: true,
          courses: true,
          researchProjects: true,
          publications: true,
          outreachActivities: true,
          blogPosts: true,
        }
      }
    }
  })

  const faculty = user?.faculty

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="mca-card p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mca-heading-1 text-primary">
              Welcome back, {user?.name}!
            </h1>
            <p className="mca-text-large text-muted-foreground mt-2">
              {faculty ? 'Manage your faculty profile and academic content' : 'Complete your faculty profile to get started'}
            </p>
          </div>
          <div className="flex space-x-3">
            {faculty ? (
              <>
                <Button variant="outline" asChild className="mca-button-outline">
                  <Link href={`/faculty/${faculty.id}`}>
                    <Eye className="h-4 w-4 mr-2" />
                    View Public Profile
                  </Link>
                </Button>
                <Button asChild className="mca-button-primary">
                  <Link href="/dashboard/profile/edit">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
              </>
            ) : (
              <Button asChild className="mca-button-primary">
                <Link href="/dashboard/profile/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Faculty Profile
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {faculty ? (
        <>
          {/* Profile Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="mca-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Qualifications</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{faculty.qualifications.length}</div>
                <p className="text-xs text-muted-foreground">
                  Academic degrees & certifications
                </p>
              </CardContent>
            </Card>

            <Card className="mca-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{faculty.courses.length}</div>
                <p className="text-xs text-muted-foreground">
                  Active courses & materials
                </p>
              </CardContent>
            </Card>

            <Card className="mca-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Publications</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{faculty.publications.length}</div>
                <p className="text-xs text-muted-foreground">
                  Research papers & articles
                </p>
              </CardContent>
            </Card>

            <Card className="mca-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{faculty.blogPosts.length}</div>
                <p className="text-xs text-muted-foreground">
                  Published blog articles
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mca-card">
              <CardHeader>
                <CardTitle className="mca-heading-3 text-primary">Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and profile management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/dashboard/profile/edit">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile Information
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/dashboard/qualifications">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Manage Qualifications
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/dashboard/courses">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Manage Courses
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/dashboard/research">
                    <FileText className="h-4 w-4 mr-2" />
                    Research & Publications
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="mca-card">
              <CardHeader>
                <CardTitle className="mca-heading-3 text-primary">Profile Summary</CardTitle>
                <CardDescription>
                  Your current profile information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">{faculty.name}</h4>
                  <p className="text-sm text-muted-foreground">{faculty.title}</p>
                  <Badge variant="secondary" className="mt-1">{faculty.department}</Badge>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2">Areas of Expertise</h5>
                  <div className="flex flex-wrap gap-1">
                    {faculty.expertise.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {faculty.expertise.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{faculty.expertise.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/dashboard/profile/edit">
                      Update Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        /* No Profile Created */
        <Card className="mca-card border-dashed border-2 border-primary/30">
          <CardContent className="text-center py-12">
            <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="mca-heading-2 text-muted-foreground mb-2">
              Create Your Faculty Profile
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get started by creating your faculty profile. Add your academic background, 
              expertise, and contact information to showcase your professional identity.
            </p>
            <Button asChild size="lg" className="mca-button-primary">
              <Link href="/dashboard/profile/create">
                <Plus className="h-5 w-5 mr-2" />
                Create Faculty Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
