import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { DashboardNav } from './components/dashboard-nav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  // Get user data for navigation
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: { faculty: true }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav user={{
        name: user?.faculty?.name || user?.email || '',
        email: user?.email || '',
        avatar: user?.faculty?.avatar || undefined
      }} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
