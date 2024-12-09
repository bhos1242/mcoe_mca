import AboutSection from "./components/about-section";
import FacultySection from "./components/faculty-section";
import HeroSection from "./components/hero-section";
import HodMessage from "./components/hod-message";
import InfrastructureSection from "./components/infrastructure-section";

import VisionMissionSection from "./components/vision-mission-section";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <HodMessage />
      <AboutSection />
      <VisionMissionSection />
      <FacultySection />
      <InfrastructureSection />
    </div>
  );
}
