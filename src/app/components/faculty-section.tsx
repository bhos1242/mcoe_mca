"use client"

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
const facultyMembers = [
  {
    id: "pradnya_muley",
    name: "Dr. Mrs. Pradnya A. Muley",
    designation: "Associate Professor",
    qualification: "M.Sc.[IT], MCA, PhD",
    experience: "20+ Years",
    email: "pradnya.muley@moderncoe.edu.in",
    personal_website:
      "https://sites.google.com/moderncoe.edu.in/pradnyamuley/home?authuser=0",
  },
  {
    id: "shivani_budhkar",
    name: "Dr. Mrs. Shivani A. Budhkar",
    designation: "Professor",
    qualification: "MCA, PhD",
    experience: "23+ Years",
    email: "shivani.budhkar@moderncoe.edu.in",
  },
  {
    id: "prakash_kene",
    name: "Dr. Prakash Kene",
    designation: "Associate Professor",
    qualification: "MCA, PhD",
    experience: "16+ Years",
    email: "prakash.kene@moderncoe.edu.in",
  },
  {
    id: "swati_ghule",
    name: "Mrs. Swati D. Ghule",
    designation: "Assistant Professor",
    qualification: "B. Sc.(Computer Sci.) M.C.A.",
    experience: "19+ Years",
    email: "swati.ghule@moderncoe.edu.in",
    personal_website: "https://wordpress.com/home/swatidotg.wordpress.com",
  },
  {
    id: "yogeshchandra_puranik",
    name: "Mr. Yogeshchandra L. Puranik",
    designation: "Assistant Professor",
    qualification: "MCA,LLB, Ph.D.(Pursuing)",
    experience: "23+ Years",
    email: "yogeshchandra.puranik@moderncoe.edu.in",
  },
  {
    id: "pratibha_adkar",
    name: "Dr. Pratibha D. Adkar",
    designation: "Assistant Professor",
    qualification: "MCA Ph.D.",
    experience: "17+ Years",
    email: "pratibha.adkar@moderncoe.edu.in",
  },
  {
    id: "netraja_mulay",
    name: "Mrs. Netraja C. Mulay",
    designation: "Assistant Professor",
    qualification: "MCA Ph.D.(Pursuing)",
    experience: "16+ Years",
    email: "netraja.mulay@moderncoe.edu.in",
  },
  {
    id: "shripad_bhide",
    name: "Mr. Shripad S. Bhide",
    designation: "Assistant Professor",
    qualification: "M.C.A. (Ph.D. pursuing)",
    experience: "20+ Years",
    email: "shripad.bhide@moderncoe.edu.in",
  },
  {
    id: "rama_bansode",
    name: "Dr. Rama S. Bansode",
    designation: "Assistant Professor",
    qualification: "MCA, PhD(pursuing)",
    experience: "16+ Years",
    email: "rama.bansode@moderncoe.edu.in",
  },
  {
    id: "ashwini_garkhedkar",
    name: "Mrs. Ashwini R Garkhedkar",
    designation: "Assistant Professor",
    qualification: "B.C.S., M.C.A. Ph.D. (Pursuing)",
    experience: "16+ Years",
    email: "ashwini.garkhedkar@moderncoe.edu.in",
  },
  {
    id: "vrushali_shinde",
    name: "Mrs. Vrushali Mayur Shinde",
    designation: "Assistant Professor",
    qualification: "B.Sc(Computer Science),MCA",
    experience: "8+ Years",
    email: "vrushali.shinde@moderncoe.edu.in",
  },
  {
    id: "mugdha_dharmadhikari",
    name: "Ms. Mugdha Dharmadhikari",
    designation: "Assistant Professor",
    qualification: "MCA",
    experience: "1+ Year",
    email: "mugdha.dharmadhikari@moderncoe.edu.in",
  },
  {
    id: "rajlaxmi_kanade",
    name: "Mrs. Rajlaxmi Jayant Kanade",
    designation: "Assistant Professor",
    qualification: "BCA,MCA(Engineering)",
    experience: "1+ Year",
    email: "rajlaxmi.kanade@moderncoe.edu.in",
  },
  {
    id: "nidhi_damle",
    name: "Mrs. Nidhi Ninad Damle",
    designation: "Assistant Professor",
    qualification: "BCA,MCA(MANAGEMENT)",
    experience: "7+ Years",
    email: "nidhi.damle@moderncoe.edu.in",
  },
];


export default function FacultySection() {
  const [isClient, setIsClient] = useState(false);
  const [visibleFaculty, setVisibleFaculty] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredFaculty = facultyMembers.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.qualification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showMoreFaculty = () => {
    setVisibleFaculty(prev => Math.min(prev + 8, filteredFaculty.length));
  };

  const showLessFaculty = () => {
    setVisibleFaculty(8);
  };

  return (
    <section id="faculty" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Esteemed Faculty</h2>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search faculty..."
            className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isClient && filteredFaculty.slice(0, visibleFaculty).map((faculty) => (
            <Card
              key={faculty.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <div
                onClick={() => window.location.href = `/faculty/${faculty.id}`}
                className="cursor-pointer"
              >
                <CardHeader className="pb-2">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-primary ring-offset-2 group-hover:ring-4 transition-all duration-300">
                    <AvatarImage src={`/faculty/${faculty.id}.jpg`} alt={faculty.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                      {faculty.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center text-lg group-hover:text-primary transition-colors duration-300">
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
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`mailto:${faculty.email}`}
                            className="flex items-center text-sm text-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-4 h-4 mr-1" />
                            Email
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{faculty.email}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {faculty.personal_website && (
                      <a
                        href={faculty.personal_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-4 h-4 mr-1" />
                        Personal Website
                      </a>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        {filteredFaculty.length > visibleFaculty && (
          <div className="text-center mt-8">
            <Button onClick={showMoreFaculty} variant="outline">
              Show More <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        {visibleFaculty > 8 && visibleFaculty >= filteredFaculty.length && (
          <div className="text-center mt-4">
            <Button onClick={showLessFaculty} variant="outline">
              Show Less <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}