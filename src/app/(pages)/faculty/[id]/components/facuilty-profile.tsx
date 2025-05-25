import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

interface Faculty {
  avatar: string;
  name: string;
  title: string;
  expertise: string[];
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  qualifications: { degree: string; school: string; year: string }[];
  certifications: string[];
  experience: { title: string; company: string; period: string }[];
}

interface FacultyProfileProps {
  faculty: Faculty
}

export default function FacultyProfile({ faculty }: FacultyProfileProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {/* About Section */}
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">About</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {faculty.about}
          </p>
        </Card>

        {/* Contact Information */}
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-500" />
              <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">
                {faculty.email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">{faculty.phone}</span>
            </div>
            {faculty.linkedin && (
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-500" />
                <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            )}
            {faculty.twitter && (
              <div className="flex items-center space-x-3">
                <Twitter className="h-5 w-5 text-blue-500" />
                <a href={faculty.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Twitter Profile
                </a>
              </div>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {faculty.expertise.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-sm font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Qualifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Qualifications</h2>
          <div className="space-y-4">
            {faculty.qualifications.map((qual, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{qual.degree}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{qual.school}</p>
                  {qual.year && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{qual.year}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
          <div className="space-y-6">
            {faculty.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                <div className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-800" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
