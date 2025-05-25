'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring the potential applications and ethical considerations of AI in medical diagnosis and treatment.',
    date: '2023-05-15',
    category: 'Healthcare',
  },
  {
    id: 2,
    title: 'Demystifying Deep Learning: A Beginners Guide',
    excerpt: 'Breaking down the complex concepts of deep learning into easily understandable explanations for newcomers.',
    date: '2023-04-22',
    category: 'Machine Learning',
  },
  {
    id: 3,
    title: 'The Ethics of AI: Navigating the Gray Areas',
    excerpt: 'Discussing the ethical implications of AI development and deployment in various sectors.',
    date: '2023-03-10',
    category: 'Ethics',
  },
  {
    id: 4,
    title: 'Natural Language Processing: From Theory to Practice',
    excerpt: 'Exploring real-world applications of NLP and how theyre shaping our digital interactions.',
    date: '2023-02-05',
    category: 'NLP',
  },
]

const POSTS_PER_PAGE = 2

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in">
          Academic Insights
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {paginatedPosts.map((post, index) => (
            <Card key={post.id} className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-in-up dark:bg-gray-800" style={{ animationDelay: `${index * 100}ms` }}>
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
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            variant="outline"
            className="transition-all duration-200 hover:bg-blue-100 dark:hover:bg-gray-700"
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

