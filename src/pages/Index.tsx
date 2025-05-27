import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import HeroSection from "@/components/sections/HeroSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import RegistrationModal from "@/components/camp/RegistrationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-amber-900 to-orange-800">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <HeroSection onRegisterClick={handleRegisterClick} />
        <ActivitiesSection />
        <TestimonialsSection />
        <CallToActionSection onRegisterClick={handleRegisterClick} />
        <RegistrationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </Dialog>
    </div>
  );
};

export default Index;
