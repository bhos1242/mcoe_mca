"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronRight, Maximize2 } from 'lucide-react';

const facilities = [
  {
    name: "Data Science Lab",
    description: "State-of-the-art lab equipped with high-performance computers and latest data science software.",
    image: "/infrastructure/data-science-lab.jpg",
    features: ["High-performance GPUs", "Big Data processing tools", "Machine Learning frameworks"],
  },
  {
    name: "IoT Lab",
    description: "Cutting-edge IoT devices and platforms for hands-on learning and experimentation.",
    image: "/infrastructure/iot-lab.jpg",
    features: ["Various IoT sensors", "Edge computing devices", "IoT platforms and protocols"],
  },
  {
    name: "Smart Classrooms",
    description: "Modern classrooms with interactive whiteboards and multimedia facilities.",
    image: "/infrastructure/classroom.jpg",
    features: ["Interactive whiteboards", "Video conferencing setup", "Collaborative learning tools"],
  },
  // {
  //   name: "Library",
  //   description: "Extensive collection of books, journals, and digital resources for research and learning.",
  //   image: "/infrastructure/library.jpg",
  //   features: ["Digital catalogs", "Online journal subscriptions", "Study areas"],
  // },
  // {
  //   name: "Computer Labs",
  //   description: "Multiple computer labs with the latest hardware and software for practical sessions.",
  //   image: "/infrastructure/computer-lab.jpg",
  //   features: ["High-speed internet", "Latest software suites", "Ergonomic workstations"],
  // },
  // {
  //   name: "Seminar Hall",
  //   description: "Well-equipped seminar hall for guest lectures, presentations, and events.",
  //   image: "/infrastructure/seminar-hall.jpg",
  //   features: ["Advanced AV system", "Flexible seating arrangements", "Presentation equipment"],
  // },
];

export default function InfrastructureSection() {
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);

  return (
    <section id="infrastructure" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our State-of-the-Art Infrastructure</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our cutting-edge facilities designed to provide students with the best learning environment and hands-on experience in the field of Computer Applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedFacility(facility)}
                >
                  <Maximize2 className="h-4 w-4" />
                  <span className="sr-only">View larger image</span>
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {facility.name}
                  <Badge variant="secondary">{facility.features.length} Features</Badge>
                </CardTitle>
                <CardDescription>{facility.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-1">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-4 pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{facility.name}</DialogTitle>
                      <DialogDescription>{facility.description}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-md"
                      />
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {facility.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {selectedFacility && (
        <Dialog open={!!selectedFacility} onOpenChange={() => setSelectedFacility(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedFacility.name}</DialogTitle>
            </DialogHeader>
            <Image
              src={selectedFacility.image}
              alt={selectedFacility.name}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-md"
            />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

