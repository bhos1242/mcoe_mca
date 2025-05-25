'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, BookOpen, Presentation, FileText } from 'lucide-react'

const courseMaterials = [
  {
    unit: 'UNIT 1: Introduction to Artificial Intelligence',
    icon: <BookOpen className="h-5 w-5" />,
    topics: [
      { title: 'Introduction to AI', link: 'https://drive.google.com/file/d/1aM7_78tYYZmMSmpAuWoIkLCPX-y23fMg/view' },
      { title: 'Intelligent Agents', link: 'https://drive.google.com/file/d/1xfA_IwZnCSwN0D8GwUXX1MrOs_-6O8Q1/view' },
    ]
  },
  {
    unit: 'UNIT 2: Search Techniques',
    icon: <Presentation className="h-5 w-5" />,
    topics: [
      { title: 'Searching, BFS, DFS', link: 'https://drive.google.com/file/d/1uii_HJvBNdZbTz-klu5STqUaKJ70xEMz/view' },
      { title: 'Uninformed Searching Techniques', link: 'https://drive.google.com/file/d/18kOjOEsdTa9rJlPau1aTQwvHH8h0i_K_/view' },
      { title: 'Informed Searching Algorithms', link: 'https://drive.google.com/file/d/16iEBrJUz99dsxpzbNakNnVDGc81drkyV/view' },
    ]
  },
  {
    unit: 'UNIT 3: Knowledge Representation in AI',
    icon: <FileText className="h-5 w-5" />,
    topics: [
      { title: 'Knowledge Representation', link: 'https://drive.google.com/file/d/FILEID6/preview' },
      { title: 'First Order Logic', link: 'https://drive.google.com/file/d/FILEID7/preview' },
    ]
  },
  {
    unit: 'UNIT 4: Planning in AI',
    icon: <Presentation className="h-5 w-5" />,
    topics: [
      { title: 'Introduction to Planning', link: 'https://drive.google.com/file/d/1NnOusRu1E_UyXEPbOwd8gD1rjxoMilm4/view' },
      { title: 'Planning Algorithms', link: 'https://drive.google.com/file/d/1bdrmwakuOa89gAU_2CkUOHYDPmUrqOOC/view' },
    ]
  },
]

export default function AICourseMaterials() {
  const [activeTab, setActiveTab] = useState(courseMaterials[0].unit)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          AI Course Materials
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            {courseMaterials.map((unit) => (
              <TabsTrigger 
                key={unit.unit} 
                value={unit.unit}
                className="flex items-center space-x-2 px-4 py-2 whitespace-nowrap"
              >
                {unit.icon}
                <span>{`Unit ${unit.unit.split(':')[0].split(' ')[1]}`}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {courseMaterials.map((unit) => (
            <TabsContent key={unit.unit} value={unit.unit}>
              <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400">
                  <CardTitle className="text-white flex items-center space-x-2">
                    {unit.icon}
                    <span>{unit.unit}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {unit.topics.map((topic, index) => (
                      <AccordionItem key={topic.title} value={`item-${index}`}>
                        <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                          {topic.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-300">View study material</span>
                            <Button asChild variant="outline" size="sm" className="transition-transform duration-200 hover:scale-105">
                              <a href={topic.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Open
                              </a>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

