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
        <div className="bg-emerald-900/20 backdrop-blur-md rounded-3xl p-12 text-center border border-amber-300/30">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готов к новым вершинам?
          </h3>
          <p className="text-xl text-amber-100 mb-8">
            Присоединяйся к нашей команде и открой в себе новые возможности
          </p>
          <DialogTrigger asChild>
            <Button
              onClick={onRegisterClick}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400"
            >
              🏕️ Забронировать место
            </Button>
          </DialogTrigger>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
