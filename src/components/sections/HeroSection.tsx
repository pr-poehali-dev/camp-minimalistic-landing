import React from "react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759844-d150f4e4c1d8?q=80&w=2070')",
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-6 leading-tight">
          Время твоих
          <span className="block text-sky-500">возможностей</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Открой новые горизонты в горах. Лагерная смена для тех, кто готов к
          приключениям и новым открытиям.
        </p>
        <DialogTrigger asChild>
          <Button
            onClick={onRegisterClick}
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Узнать как попасть в лагерь
          </Button>
        </DialogTrigger>
      </div>
    </section>
  );
};

export default HeroSection;
