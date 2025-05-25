"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Building2, GraduationCap, TrendingUp } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface StudentPlacement {
  id: string
  name: string
  image: string
  company: string
  package: number
  passingYear: number
  linkedinUrl: string
}

const placedStudents: StudentPlacement[] = [
  {
    id: "1",
    name: "Amit Patil",
    image: "/placeholder.svg?height=400&width=400",
    company: "Google",
    package: 20,
    passingYear: 2023,
    linkedinUrl: "https://linkedin.com/in/amit-patil"
  },
  {
    id: "2",
    name: "Sneha Deshmukh",
    image: "/placeholder.svg?height=400&width=400",
    company: "Microsoft",
    package: 18,
    passingYear: 2023,
    linkedinUrl: "https://linkedin.com/in/sneha-deshmukh"
  },
  {
    id: "3",
    name: "Rohit Pawar",
    image: "/placeholder.svg?height=400&width=400",
    company: "Amazon",
    package: 22,
    passingYear: 2023,
    linkedinUrl: "https://linkedin.com/in/rohit-pawar"
  },
  {
    id: "4",
    name: "Priya Kulkarni",
    image: "/placeholder.svg?height=400&width=400",
    company: "Facebook",
    package: 19,
    passingYear: 2023,
    linkedinUrl: "https://linkedin.com/in/priya-kulkarni"
  }
]

export function PlacedStudents() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">Our Placed Students</h2>
          <p className="text-xl text-secondary">Meet our successful graduates making their mark in top companies</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {placedStudents.map((student) => (
            <Card key={student.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/10 hover:border-primary/30">
              <div className="relative aspect-square">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl text-primary">{student.name}</span>
                  <Badge variant="secondary" className="text-sm">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    {student.passingYear}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-secondary" />
                    <span className="text-base font-medium text-primary">{student.company}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant="outline" className="ml-auto">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {student.package} LPA
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Annual package in Lakhs</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(student.linkedinUrl, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-primary flex items-center justify-center">
            <TrendingUp className="h-6 w-6 mr-2" />
            Our students consistently secure top positions in leading companies
          </p>
        </div>
      </div>
    </section>
  )
}

