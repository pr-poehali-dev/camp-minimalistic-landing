import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Mountain,
  Users,
  Compass,
  Camera,
  Campfire,
  Sunset,
} from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activities = [
    {
      icon: <Mountain className="w-8 h-8 text-sky-500" />,
      title: "Горные походы",
      description:
        "Исследуем живописные тропы и покоряем вершины с опытными инструкторами",
    },
    {
      icon: <Users className="w-8 h-8 text-sky-500" />,
      title: "Командные игры",
      description:
        "Развиваем навыки сотрудничества через увлекательные активности на свежем воздухе",
    },
    {
      icon: <Compass className="w-8 h-8 text-sky-500" />,
      title: "Ориентирование",
      description: "Учимся читать карты и находить путь в горной местности",
    },
    {
      icon: <Camera className="w-8 h-8 text-sky-500" />,
      title: "Фотоохота",
      description:
        "Запечатлеваем красоту природы и создаём незабываемые воспоминания",
    },
    {
      icon: <Campfire className="w-8 h-8 text-sky-500" />,
      title: "Вечера у костра",
      description:
        "Делимся историями, поём песни и наслаждаемся звёздным небом",
    },
    {
      icon: <Sunset className="w-8 h-8 text-sky-500" />,
      title: "Встречи рассвета",
      description:
        "Наблюдаем восход солнца с горных вершин и заряжаемся энергией",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
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
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Узнать как попасть в лагерь
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-700 mb-2">
                  Как попасть в лагерь
                </DialogTitle>
                <DialogDescription className="text-slate-600 leading-relaxed">
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        📞 Свяжитесь с нами
                      </h4>
                      <p>Телефон: +7 (999) 123-45-67</p>
                      <p>Email: info@gornylagerg.ru</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        📅 Возраст участников
                      </h4>
                      <p>От 12 до 17 лет</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        💰 Стоимость
                      </h4>
                      <p>35 000 рублей за 14 дней</p>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
                      <h4 className="font-semibold text-sky-700 mb-2">
                        🎯 Что входит
                      </h4>
                      <p className="text-sky-600">
                        Проживание, питание, все активности, снаряжение и
                        сопровождение инструкторов
                      </p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">
            Программа смены
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Каждый день наполнен активностями, которые помогут раскрыть твой
            потенциал и создать незабываемые воспоминания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-sky-50 rounded-2xl">
                    {activity.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-700">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center leading-relaxed">
                  {activity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-100 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
            Готов к новым вершинам?
          </h3>
          <p className="text-xl text-slate-600 mb-8">
            Присоединяйся к нашей команде и открой в себе новые возможности
          </p>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Забронировать место
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default Index;
