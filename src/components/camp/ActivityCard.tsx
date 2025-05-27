import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ActivityCardProps {
  icon: string;
  title: string;
  description: string;
}

const ActivityCard = ({ icon, title, description }: ActivityCardProps) => {
  return (
    <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/15 backdrop-blur-md border border-white/20">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-sky-400/20 backdrop-blur-sm rounded-2xl border border-sky-300/30">
            <Icon name={icon as any} size={32} className="text-sky-200" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-100 text-center leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
