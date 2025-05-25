"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, GraduationCap, LineChart, Users, TrendingUp } from 'lucide-react'

const placementData = [
  { company: "Google", lpa: 20, students: 2 },
  { company: "Microsoft", lpa: 18, students: 3 },
  { company: "Amazon", lpa: 22, students: 4 },
  { company: "Facebook", lpa: 19, students: 2 },
  { company: "Other Top", lpa: 16, students: 15 },
]

const stats = [
  {
    title: "Placed Students",
    value: "92%",
    icon: Users,
    description: "Placement ratio for 2023",
  },
  {
    title: "Average Package",
    value: "18.5 LPA",
    icon: LineChart,
    description: "Average salary package",
  },
  {
    title: "Companies Visited",
    value: "45+",
    icon: Building2,
    description: "Top recruiters this year",
  },
]

export function PlacementStats() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">Placement Highlights</h2>
          <p className="text-xl text-secondary">Our students are placed in top companies worldwide</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium text-primary">{stat.title}</CardTitle>
                <stat.icon className="h-6 w-6 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm text-secondary">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12 border-primary/10 hover:border-primary/30 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Package Distribution</CardTitle>
            <CardDescription className="text-secondary">Company-wise placement statistics for 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] sm:h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={placementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="company" stroke="hsl(var(--primary))" />
                  <YAxis stroke="hsl(var(--primary))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      borderColor: 'hsl(var(--primary))',
                      color: 'hsl(var(--primary))'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="lpa" fill="hsl(var(--primary))" name="Package (LPA)" />
                  <Bar dataKey="students" fill="hsl(var(--secondary))" name="Students Placed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placementData.map((placement, index) => (
            <Card key={index} className="flex flex-col border-primary/10 hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-primary">{placement.company}</CardTitle>
                  <Badge variant="secondary" className="text-lg">
                    {placement.lpa} LPA
                  </Badge>
                </div>
                <CardDescription className="text-secondary">
                  {placement.students} student{placement.students > 1 ? "s" : ""} placed
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center space-x-2 mt-auto">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-sm text-secondary">Batch of 2023</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-primary flex items-center justify-center">
            <TrendingUp className="h-6 w-6 mr-2" />
            Our placements are consistently improving year after year
          </p>
        </div>
      </div>
    </section>
  )
}

