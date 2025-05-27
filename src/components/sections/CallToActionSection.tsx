import React from "react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

interface CallToActionSectionProps {
  onRegisterClick: () => void;
}

const CallToActionSection = ({ onRegisterClick }: CallToActionSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готов к новым вершинам?
          </h3>
          <p className="text-xl text-gray-100 mb-8">
            Присоединяйся к нашей команде и открой в себе новые возможности
          </p>
          <DialogTrigger asChild>
            <Button
              onClick={onRegisterClick}
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-400"
            >
              Забронировать место
            </Button>
          </DialogTrigger>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
