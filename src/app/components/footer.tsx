import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 ">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 w-5 h-5 mt-1 " />
              <p className="text-sm">
                1186/A, Off J.M Road, Shivajinagar, Pune, Maharashtra, 411005.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 " />
              <div>
                <p className="text-sm">(20) 25533638, 25533648</p>
                <p className="text-sm">(20) 25530957</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 " />
              <a
                href="mailto:pesmcoe@moderncoe.edu.in"
                className="text-sm hover:underline"
              >
                pesmcoe@moderncoe.edu.in
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#vision-mission", label: "Vision & Mission" },
                { href: "#faculty", label: "Faculty" },
                { href: "#infrastructure", label: "Infrastructure" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 ">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { href: "#", icon: Facebook, label: "Facebook" },
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm">
              Stay updated with our latest news and events!
            </p>
            <Button className="w-full sm:w-auto" variant="secondary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit College Website
            </Button>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MCA Department, Modern College of
            Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
