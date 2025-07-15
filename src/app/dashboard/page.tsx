import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, BookOpen, FileText, Users } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getSession()
  
  // Get user with faculty data
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      faculty: {
        include: {
          courses: true,
          publications: true,
          researchProjects: true,
        }
      }
    }
  })

  const faculty = user?.faculty

  return (
    <div className="space-y-8">
      <div className="mca-card p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <h1 className="mca-heading-1 text-primary">
          Welcome to Faculty Dashboard
        </h1>
        <p className="mca-text-large text-muted-foreground mt-2">
          Manage your academic profile and course materials
        </p>
      </div>

      {!faculty ? (
        <Card className="mca-card border-dashed border-2 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="mca-heading-2 text-primary">Create Your Faculty Profile</CardTitle>
            <CardDescription className="mca-text-base">
              You haven't created your faculty profile yet. Get started by creating your profile to showcase your academic achievements.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="mca-button-primary">
              <Link href="/dashboard/profile/create">
                Create Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="mca-card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Profile Status</CardTitle>
                <User className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700">Active</div>
                <p className="text-xs text-green-600">
                  Profile is live and visible
                </p>
              </CardContent>
            </Card>

            <Card className="mca-card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Courses</CardTitle>
                <BookOpen className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700">{faculty.courses.length}</div>
                <p className="text-xs text-blue-600">
                  Active courses
                </p>
              </CardContent>
            </Card>

            <Card className="mca-card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">Publications</CardTitle>
                <FileText className="h-5 w-5 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-700">{faculty.publications.length}</div>
                <p className="text-xs text-purple-600">
                  Research publications
                </p>
              </CardContent>
            </Card>

            <Card className="mca-card bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">Research Projects</CardTitle>
                <Users className="h-5 w-5 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-700">{faculty.researchProjects.length}</div>
                <p className="text-xs text-orange-600">
                  Active projects
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mca-card">
              <CardHeader>
                <CardTitle className="mca-heading-3 text-primary">Quick Actions</CardTitle>
                <CardDescription className="mca-text-base">
                  Common tasks for managing your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full justify-start mca-button-primary">
                  <Link href="/dashboard/profile/edit">
                    Edit Profile Information
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start mca-button-outline">
                  <Link href={`/faculty/${faculty.id}`}>
                    View Public Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="mca-card">
              <CardHeader>
                <CardTitle className="mca-heading-3 text-primary">Profile Summary</CardTitle>
                <CardDescription className="mca-text-base">
                  Overview of your faculty profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Name:</span>
                    <span className="mca-text-base">{faculty.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Title:</span>
                    <span className="mca-text-base">{faculty.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Department:</span>
                    <span className="mca-text-base">{faculty.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Email:</span>
                    <span className="mca-text-base">{faculty.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
