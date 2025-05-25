'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react'

const POSTS_PER_PAGE = 2

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

interface BlogsProps {
  blogPosts?: BlogPost[];
}

export default function BlogsPage({ blogPosts = [] }: BlogsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    window.scrollTo(0, 0)
  }

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in">
            Academic Insights
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">No blog posts available at the moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in">
          Academic Insights
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {paginatedPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-in-up dark:bg-gray-800" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4">
                <div className="text-sm font-medium mb-2 opacity-80">{post.category}</div>
                <CardTitle className="text-xl">
                  <Link href={`/blogs/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <Button asChild variant="outline" className="w-full group">
                  <Link href={`/blogs/${post.id}`} className="flex items-center justify-center">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              className="transition-all duration-200 hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              className="transition-all duration-200 hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

