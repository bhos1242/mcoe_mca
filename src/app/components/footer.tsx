"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ExternalLink, Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Instagram, ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-primary/10 to-secondary/10 text-foreground py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-primary">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-secondary" />
              <p className="text-sm">
                1186/A, Off J.M Road, Shivajinagar, Pune, Maharashtra, 411005.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-sm">(20) 25533638, 25533648</p>
                <p className="text-sm">(20) 25530957</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary" />
              <a
                href="mailto:pesmcoe@moderncoe.edu.in"
                className="text-sm hover:underline text-primary"
              >
                pesmcoe@moderncoe.edu.in
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#vision-mission", label: "Vision & Mission" },
                { href: "#faculty", label: "Faculty" },
                { href: "#infrastructure", label: "Infrastructure" },
                { href: "/placements", label: "Placements" },
                { href: "/students_corner", label: "Students' Corner" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-primary">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { href: "#", icon: Facebook, label: "Facebook" },
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
                { href: "#", icon: Instagram, label: "Instagram" },
              ].map((social, index) => (
                <Button key={index} variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground" asChild>
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
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-primary">Newsletter</h3>
            <p className="text-sm">Subscribe to our newsletter for updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-secondary"
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8 bg-secondary/50" />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MCA Department, Modern College of
            Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

