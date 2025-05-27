import React from "react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

interface CallToActionSectionProps {
  onRegisterClick: () => void;
}

const CallToActionSection = ({ onRegisterClick }: CallToActionSectionProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-100 to-sky-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
          Готов к новым вершинам?
        </h3>
        <p className="text-xl text-slate-600 mb-8">
          Присоединяйся к нашей команде и открой в себе новые возможности
        </p>
        <DialogTrigger asChild>
          <Button
            onClick={onRegisterClick}
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Забронировать место
          </Button>
        </DialogTrigger>
      </div>
    </section>
  );
};

export default CallToActionSection;
