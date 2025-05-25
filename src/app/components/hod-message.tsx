import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function HodMessage() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue-200/25 bg-[size:20px_20px] opacity-25"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Message from{" "}
            <span className="text-primary">Head of Department</span>
          </h2>

          <Card className="overflow-hidden transform hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform -rotate-6"></div>
                    <Avatar className="w-48 h-48 border-4 border-white shadow-lg relative">
                      <AvatarImage
                        src="/placeholder.svg"
                        alt="Dr. Mrs. Pradnya A. Muley"
                      />
                      <AvatarFallback className="text-4xl bg-primary/10 text-primary">
                        PAM
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="font-bold text-2xl text-primary">
                      Dr. Mrs. Pradnya A. Muley
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      Head of Department
                    </p>
                    <p className="text-sm text-gray-500">M.Sc.[IT], MCA, PhD</p>
                    <p className="text-sm text-gray-500">
                      Experience: 20+ Years
                    </p>
                    <a
                      href="mailto:pradnya.muley@moderncoe.edu.in"
                      className="text-sm text-primary hover:underline mt-2 inline-block transition-colors duration-200 ease-in-out"
                    >
                      pradnya.muley@moderncoe.edu.in
                    </a>
                  </div>
                </div>

                <div className="flex-grow space-y-6">
                  <Quote className="w-16 h-16 text-primary/20 mx-auto lg:mx-0 transform -rotate-6" />
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                      Welcome to the Department of Master of Computer
                      Applications at Modern College of Engineering. Our
                      department strives for excellence in computer applications
                      education, fostering an environment of innovation and
                      learning.
                    </p>
                    <p>
                      We are committed to providing quality education that
                      combines theoretical knowledge with practical skills,
                      preparing our students for successful careers in the
                      ever-evolving field of technology. Our curriculum is
                      designed to meet industry demands while promoting research
                      and innovation.
                    </p>
                    <p>
                      Our dedicated faculty members, state-of-the-art
                      infrastructure, and strong industry connections ensure
                      that our students receive the best possible education and
                      opportunities for growth. We focus not just on academic
                      excellence, but also on developing leadership qualities
                      and ethical values in our students.
                    </p>
                    <div className="pt-6 border-t border-gray-200">
                      <p className="font-semibold text-primary text-lg">
                        Dr. Mrs. Pradnya A. Muley
                      </p>
                      <p className="text-sm text-gray-600">
                        Head of Department, MCA
                      </p>
                      <p className="text-sm text-gray-600">
                        Modern College of Engineering, Pune
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
