import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const facilities = [
  {
    name: "Data Science Lab",
    description:
      "State-of-the-art lab equipped with high-performance computers and latest data science software.",
    image: "/infrastructure/data-science-lab.jpg",
  },
  {
    name: "IoT Lab",
    description:
      "Cutting-edge IoT devices and platforms for hands-on learning and experimentation.",
    image: "/infrastructure/iot-lab.jpg",
  },
  {
    name: "Smart Classrooms",
    description:
      "Modern classrooms with interactive whiteboards and multimedia facilities.",
    image: "/infrastructure/classroom.jpg",
  },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={facility.image}
                alt={facility.name}
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{facility.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
