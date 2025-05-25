"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, GraduationCap, Lightbulb, Users } from 'lucide-react';
import Link from "next/link";


const features = [
  { icon: GraduationCap, text: "Expert Faculty" },
  { icon: Lightbulb, text: "Innovative Curriculum" },
  { icon: Users, text: "Industry Partnerships" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative text-foreground py-0 md:py-0 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
    
      <div className="container mx-auto py-24 px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
            Welcome to the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              MCA Department
            </span>
            <br />
            <span className="text-primary">Modern College Of Engineering, Pune</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary animate-fade-in-up">
            Fostering Innovation, Research, and Professional Excellence
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Link href="#about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        {mounted && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((item, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-primary/20"
              >
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold text-secondary">{item.text}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

