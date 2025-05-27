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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071')",
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="bg-emerald-900/20 backdrop-blur-md rounded-3xl p-8 border border-amber-300/30">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Время твоих
            <span className="block text-amber-300">возможностей</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Открой новые горизонты в горах. Лагерная смена для тех, кто готов к
            приключениям и новым открытиям.
          </p>
          <DialogTrigger asChild>
            <Button
              onClick={onRegisterClick}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-amber-400"
            >
              🔥 Узнать как попасть в лагерь
            </Button>
          </DialogTrigger>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
