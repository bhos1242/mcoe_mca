"use client";

import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Pause, Play, ChevronUp, ChevronDown } from 'lucide-react';
import placements from "../data/placements.json";

interface Placement {
  name: string;
  company: string;
  package: string;
}

export default function PlacementTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollContent = () => {
      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        scrollContainer.scrollTop = 0;
      } else {
        scrollContainer.scrollTop += 1;
      }
    };

    const intervalId = setInterval(scrollContent, 50);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const togglePause = () => setIsPaused(!isPaused);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={`bg-primary text-primary-foreground transition-all duration-300 ease-in-out ${isExpanded ? 'h-40' : 'h-10'}`}>
      <div className="container mx-auto relative">
        <div 
          ref={scrollRef}
          className={`overflow-hidden ${isExpanded ? 'h-32' : 'h-10'}`}
        >
          <div className={`flex flex-col ${!isPaused && 'animate-scroll'}`}>
            {placements.map((placement: Placement, index: number) => (
              <div key={index} className="py-2 flex items-center justify-between">
                <span>{placement.name}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="secondary" className="ml-2">
                        {placement.company}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Package: {placement.package}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 flex items-center h-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePause}
            className="text-primary-foreground hover:text-primary-foreground/80"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleExpand}
            className="text-primary-foreground hover:text-primary-foreground/80"
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Add this to your global CSS file
const globalStyles = `
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}
`;

