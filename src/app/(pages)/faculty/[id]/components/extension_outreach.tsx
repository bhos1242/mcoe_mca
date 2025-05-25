'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Calendar } from 'lucide-react'

interface OutreachActivity {
  title: string;
  description: string;
  image: string;
  date: string;
  participants: number;
}

interface ExtensionOutreachProps {
  outreachActivities: OutreachActivity[];
}

export default function ExtensionOutreach({ outreachActivities }: ExtensionOutreachProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in">
          Extension & Outreach
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {outreachActivities.map((activity, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-in-up dark:bg-gray-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4">
                <CardTitle className="text-xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {activity.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      {activity.participants} participants
                    </div>
                  </div>
                  <p className={`text-gray-600 dark:text-gray-300 ${expandedCard === index ? '' : 'line-clamp-3'}`}>
                    {activity.description}
                  </p>
                  <Button 
                    variant="link" 
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="mt-2 p-0 h-auto font-semibold text-blue-500 dark:text-blue-400"
                  >
                    {expandedCard === index ? 'Read less' : 'Read more'}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

