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
    <Card className="rounded-3xl border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-sky-50 rounded-2xl">
            <Icon name={icon as any} size={32} className="text-sky-500" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-slate-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 text-center leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
