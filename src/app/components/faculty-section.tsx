import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe, Mail } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Mrs. Pradnya A. Muley",
    designation: "Associate Professor",
    qualification: "M.Sc.[IT], MCA, PhD",
    experience: "20+ Years",
    email: "pradnya.muley@moderncoe.edu.in",
    personal_website:
      "https://sites.google.com/moderncoe.edu.in/pradnyamuley/home?authuser=0",
  },
  {
    name: "Dr. Mrs. Shivani A. Budhkar",
    designation: "Professor",
    qualification: "MCA, PhD",
    experience: "23+ Years",
    email: "shivani.budhkar@moderncoe.edu.in",
  },
  {
    name: "Dr. Prakash Kene",
    designation: "Associate Professor",
    qualification: "MCA, PhD",
    experience: "16+ Years",
    email: "prakash.kene@moderncoe.edu.in",
  },
  {
    name: "Mrs. Swati D. Ghule",
    designation: "Assistant Professor",
    qualification: "B. Sc.(Computer Sci.) M.C.A.",
    experience: "19+ Years",
    email: "swati.ghule@moderncoe.edu.in",
    personal_website: "https://wordpress.com/home/swatidotg.wordpress.com",
  },
  {
    name: "Mr. Yogeshchandra L. Puranik",
    designation: "Assistant Professor",
    qualification: "MCA,LLB, Ph.D.(Pursuing)",
    experience: "23+ Years",
    email: "yogeshchandra.puranik@moderncoe.edu.in",
  },
  {
    name: "Dr. Pratibha D. Adkar",
    designation: "Assistant Professor",
    qualification: "MCA Ph.D.",
    experience: "17+ Years",
    email: "pratibha.adkar@moderncoe.edu.in",
  },
  {
    name: "Mrs. Netraja C. Mulay",
    designation: "Assistant Professor",
    qualification: "MCA Ph.D.(Pursuing)",
    experience: "16+ Years",
    email: "netraja.mulay@moderncoe.edu.in",
  },
  {
    name: "Mr. Shripad S. Bhide",
    designation: "Assistant Professor",
    qualification: "M.C.A. (Ph.D. pursuing)",
    experience: "20+ Years",
    email: "shripad.bhide@moderncoe.edu.in",
  },
  {
    name: "Dr. Rama S. Bansode",
    designation: "Assistant Professor",
    qualification: "MCA, PhD(pursuing)",
    experience: "16+ Years",
    email: "rama.bansode@moderncoe.edu.in",
  },
  {
    name: "Mrs. Ashwini R Garkhedkar",
    designation: "Assistant Professor",
    qualification: "B.C.S., M.C.A. Ph.D. (Pursuing)",
    experience: "16+ Years",
    email: "ashwini.garkhedkar@moderncoe.edu.in",
  },
  {
    name: "Mrs. Vrushali Mayur Shinde",
    designation: "Assistant Professor",
    qualification: "B.Sc(Computer Science),MCA",
    experience: "8+ Years",
    email: "vrushali.shinde@moderncoe.edu.in",
  },
  {
    name: "Ms. Mugdha Dharmadhikari",
    designation: "Assistant Professor",
    qualification: "MCA",
    experience: "1+ Year",
    email: "mugdha.dharmadhikari@moderncoe.edu.in",
  },
  {
    name: "Mrs. Rajlaxmi Jayant Kanade",
    designation: "Assistant Professor",
    qualification: "BCA,MCA(Engineering)",
    experience: "1+ Year",
    email: "rajlaxmi.kanade@moderncoe.edu.in",
  },
  {
    name: "Mrs. Nidhi Ninad Damle",
    designation: "Assistant Professor",
    qualification: "BCA,MCA(MANAGEMENT)",
    experience: "7+ Years",
    email: "nidhi.damle@moderncoe.edu.in",
  },
];

export default function FacultySection() {
  return (
    <section
      id="faculty"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Esteemed Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                    {faculty.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-center text-lg">
                  {faculty.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="mb-2">
                  {faculty.designation}
                </Badge>
                <p className="text-sm text-muted-foreground mb-2">
                  {faculty.qualification}
                </p>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4 mr-1 text-muted-foreground" />
                  <span className="text-sm">{faculty.experience}</span>
                </div>
                <div className="flex flex-col items-center space-y-2 mt-4">
                  <a
                    href={`mailto:${faculty.email}`}
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    {faculty.email}
                  </a>
                  {faculty.personal_website && (
                    <a
                      href={faculty.personal_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      Personal Website
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
