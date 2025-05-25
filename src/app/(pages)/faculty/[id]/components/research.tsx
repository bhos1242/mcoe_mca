'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, FileText } from 'lucide-react'

interface ResearchProps {
  researchData: {
    projects: Array<{
      title: string;
      description: string;
      link: string;
    }>;
    publications: Array<{
      title: string;
      journal: string;
      year: number;
      link: string;
    }>;
  };
}

export default function Research({ researchData }: ResearchProps) {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 animate-fade-in">
          Research
        </h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="projects" className="flex items-center space-x-2 px-4 py-2">
              <BookOpen className="h-5 w-5" />
              <span>Current Projects</span>
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center space-x-2 px-4 py-2">
              <FileText className="h-5 w-5" />
              <span>Publications</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-6">
            {researchData.projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <Button asChild variant="outline" className="group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Learn More 
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="publications" className="space-y-4">
            {researchData.publications.map((pub, index) => (
              <Card key={pub.title} className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-400 text-white">
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{pub.journal}, {pub.year}</p>
                  <Button asChild variant="outline" size="sm" className="group">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Publication
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

