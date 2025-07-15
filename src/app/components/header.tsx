"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GraduationCap, Menu, X, ChevronDown, LogIn, User, UserPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  {
    name: "Academics",
    href: "#",
    subItems: [
      { name: "Vision & Mission", href: "/#vision-mission" },
      { name: "Faculty Directory", href: "/faculty" },
      { name: "Infrastructure", href: "/#infrastructure" },
    ],
  },
  { name: "Placements", href: "/placements" },
  { name: "Students' Corner", href: "/students_corner" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const isAuthPage = pathname === '/login' || pathname.startsWith('/dashboard');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="mca-heading-3 text-primary">
              MCA Department
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                item.subItems ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="mca-nav-link">
                        {item.name} <ChevronDown className="h-4 w-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mca-card">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.name}>
                          <Link href={subItem.href} className="w-full mca-nav-link">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "mca-nav-link-active bg-primary/10"
                        : "mca-nav-link hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Login/Dashboard Button */}
            <div className="hidden md:flex items-center space-x-2">
              {isAuthPage ? (
                <Link href="/">
                  <Button variant="outline" size="sm" className="mca-button-outline">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Public Site
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <Button variant="outline" size="sm" className="mca-button-outline">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Register
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="sm" className="mca-button-primary">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] mca-card">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Navigation Links */}
                {navItems.map((item) => (
                  item.subItems ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="justify-start w-full mca-nav-link">
                          {item.name} <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="mca-card">
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="w-full mca-nav-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "mca-nav-link-active bg-primary/10"
                          : "mca-nav-link hover:bg-muted"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}

                {/* Mobile Login/Dashboard Button */}
                <div className="pt-4 border-t border-border space-y-3">
                  {isAuthPage ? (
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full mca-button-outline">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Public Site
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full mca-button-outline">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Register as Faculty
                        </Button>
                      </Link>
                      <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full mca-button-primary">
                          <LogIn className="h-4 w-4 mr-2" />
                          Faculty Login
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

