'use client'

import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Header = () => {
  const pathname = usePathname()
  const params = useParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [facultyId, setFacultyId] = useState<string | null>(null)

  useEffect(() => {
    if (params && params.id) {
      setFacultyId(params.id as string)
    }
  }, [params])

  const navItems = [
    { href: facultyId ? `/faculty/${facultyId}` : '/', label: 'Home' },
    { href: facultyId ? `/faculty/${facultyId}/study-material` : '/study-material', label: 'Study Material' },
    { href: facultyId ? `/faculty/${facultyId}/research` : '/research', label: 'Research' },
    { href: facultyId ? `/faculty/${facultyId}/blogs` : '/blogs', label: 'Blogs' },
    { href: facultyId ? `/faculty/${facultyId}/videos` : '/videos', label: 'Videos' },
    { href: facultyId ? `/faculty/${facultyId}/contact` : '/contact', label: 'Contact Me' },
    { href: facultyId ? `/faculty/${facultyId}/extension-outreach` : '/extension-outreach', label: 'Extension & Outreach' },
  ]

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 shadow-md z-50 sticky top-0">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href={facultyId ? `/faculty/${facultyId}` : '/'} className="text-2xl font-bold">
            {facultyId ? `Dr. ${facultyId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}` : 'Faculty Profile'}
          </Link>
          <nav className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary bg-white  px-2 py-1 rounded-md"  
                    : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-2 bg-background">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

