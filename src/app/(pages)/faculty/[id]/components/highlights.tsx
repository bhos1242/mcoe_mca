import React from 'react';
import { BookOpen, FileText, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const highlights = [
  {
    title: "Latest Research",
    description: "Exploring advanced NLP models for multilingual contexts.",
    link: "/research",
    linkText: "Learn More",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Recent Publications",
    description: "New paper on efficient training of large-scale vision transformers.",
    link: "/research#publications",
    linkText: "View Publications",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Upcoming Events",
    description: "AI for Social Good Workshop - Join us next month!",
    link: "/extension-outreach",
    linkText: "Event Details",
    icon: <Calendar className="h-6 w-6" />,
  },
];

const HighlightsSection = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlights.map((item, index) => (
        <Card key={item.title} className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="mb-6 text-muted-foreground">{item.description}</p>
            <Button variant="outline" asChild className="w-full group">
              <a href={item.link} className="flex items-center justify-center">
                {item.linkText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default HighlightsSection;