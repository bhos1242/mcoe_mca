"use client";
import placements from "../data/placements.json";

interface Placement {
  name: string;
  company: string;
  package: string;
}

export default function PlacementTicker() {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {placements.map((placement, index) => (
            <span key={index} className="mx-4">
              {placement.name} placed at {placement.company} with {placement.package}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
