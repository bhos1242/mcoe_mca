import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export default function HeroSection({ name, title, description, avatar }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 sm:p-12">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-0 sm:mr-8"
        >
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, 160px"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
            {name}
          </h1>
          <h2 className="mb-4 text-xl font-semibold text-blue-100 sm:text-2xl">
            {title}
          </h2>
          <p className="text-lg text-blue-50 sm:text-xl">
            {description}
          </p>
          <Button asChild className="animate-slide-in-up delay-200 group">
            <a href="/contact" className="flex items-center">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
