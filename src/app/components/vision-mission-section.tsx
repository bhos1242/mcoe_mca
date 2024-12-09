import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section
      id="vision-mission"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Vision & Mission
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="mr-2" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-gray-700">
                To be a center of excellence in computer applications education,
                fostering innovation and producing industry-ready professionals
                who contribute to the technological advancement of society.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-2" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  "Provide high-quality education in computer applications",
                  "Promote research and development activities",
                  "Collaborate with industry partners for practical exposure",
                  "Inculcate ethical values and leadership qualities in students",
                  "Continuously update curriculum to meet industry demands",
                ].map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{mission}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
