import React from "react";
import ActivityCard from "@/components/camp/ActivityCard";
import { campActivities } from "@/constants/campData";

const ActivitiesSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-emerald-900/20 backdrop-blur-md rounded-3xl p-8 mb-16 border border-amber-300/30">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Программа смены
        </h2>
        <p className="text-xl text-amber-100 max-w-3xl mx-auto text-center">
          Каждый день наполнен активностями, которые помогут раскрыть твой
          потенциал и создать незабываемые воспоминания
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campActivities.map((activity, index) => (
          <ActivityCard
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
