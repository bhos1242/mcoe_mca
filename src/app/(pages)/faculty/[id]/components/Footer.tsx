import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dr. Pradnya Muley</h3>
            <p className="text-sm">
              Leading researcher in artificial intelligence and machine learning at the University of Technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook" className="text-white hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" className="text-white hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-white hover:text-blue-600">
                <LinkedIn className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link href="/research" className="text-sm hover:text-yellow-400 transition-colors">
                Research
              </Link>
              <Link href="/publications" className="text-sm hover:text-yellow-400 transition-colors">
                Publications
              </Link>
              <Link href="/contact" className="text-sm hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dr. Pradnya Muley. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-sm hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

