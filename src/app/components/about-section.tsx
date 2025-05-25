import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Rocket, Target, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          About Our Department
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Empowering future tech leaders with cutting-edge education and
          industry-relevant skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="flex items-center text-2xl">
                <History className="mr-2" /> Our History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Established in 2005, the MCA Department at Modern College of
                Engineering has been at the forefront of computer application
                education for over 15 years. Our journey has been marked by
                continuous growth, adaptation to emerging technologies, and a
                commitment to academic excellence.
              </p>
              <div className="mt-4">
                <Badge variant="outline" className="mr-2">
                  Est. 2005
                </Badge>
                <Badge variant="outline">15+ Years of Excellence</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-2" /> Our Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  {
                    icon: Rocket,
                    text: "Provide cutting-edge education in computer applications",
                  },
                  {
                    icon: Users,
                    text: "Foster industry-academia partnerships",
                  },
                  { icon: Rocket, text: "Promote research and innovation" },
                  {
                    icon: Users,
                    text: "Develop well-rounded IT professionals",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in shaping the future of technology and become a part of our
            innovative community.
          </p>
        </div>
      </div>
    </section>
  );
}
