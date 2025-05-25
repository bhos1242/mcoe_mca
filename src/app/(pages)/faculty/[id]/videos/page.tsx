'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from 'lucide-react'

const videos = [
  {
    id: 'video1',
    title: 'Introduction to Machine Learning',
    description: 'A comprehensive overview of machine learning concepts and techniques.',
    embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg',
  },
  {
    id: 'video2',
    title: 'Natural Language Processing in Practice',
    description: 'Practical applications of NLP in real-world scenarios.',
    embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg',
  },
]

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in">
          Educational Videos
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={video.id} className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-in-up dark:bg-gray-800" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4">
                <CardTitle className="text-xl">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="mb-4 text-gray-600 dark:text-gray-300">{video.description}</p>
                <div className="aspect-w-16 aspect-h-9 relative group cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  {activeVideo === video.id && (
                    <iframe
                      src={video.embedUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-md"
                    ></iframe>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

