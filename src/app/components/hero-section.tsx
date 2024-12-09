import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              MCA Department
            </span>{" "}
            Modern College Of Engineering, Pune
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Fostering Innovation, Research, and Professional Excellence
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="#about" className="text-primary">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: GraduationCap, text: "Expert Faculty" },
            { icon: Lightbulb, text: "Innovative Curriculum" },
            { icon: Users, text: "Industry Partnerships" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition-all hover:scale-105"
            >
              <item.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
