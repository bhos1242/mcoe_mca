import { GraduationCap, BookOpen, Users, Calendar, ClipboardList, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  { icon: GraduationCap, title: "Academic Resources", description: "Access study materials, lecture notes, and more.", href: "#academic-resources" },
  { icon: BookOpen, title: "Library", description: "Explore our extensive library resources.", href: "#library" },
  { icon: Users, title: "Clubs & Activities", description: "Join various student clubs and activities.", href: "#clubs-activities" },
  { icon: Calendar, title: "Events", description: "Stay updated with upcoming events and seminars.", href: "#events" },
  { icon: ClipboardList, title: "Examination", description: "Get information about exams, schedules, and results.", href: "#examination" },
  { icon: Briefcase, title: "Placements", description: "Find placement opportunities and career guidance.", href: "#placements" },
];

export default function StudentsCorner() {
  return (
    <section className="container mx-auto py-20 px-4 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Students' Corner
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
          A dedicated space for our students to access resources, updates, and more.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</CardDescription>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

