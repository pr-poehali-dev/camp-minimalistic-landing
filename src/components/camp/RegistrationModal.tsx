import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { campInfo } from "@/constants/campData";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                <p>Телефон: {campInfo.phone}</p>
                <p>Email: {campInfo.email}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl">
                <h4 className="font-semibold text-slate-700 mb-2">
                  📅 Возраст участников
                </h4>
                <p>{campInfo.ageRange}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl">
                <h4 className="font-semibold text-slate-700 mb-2">
                  💰 Стоимость
                </h4>
                <p>{campInfo.price}</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200">
                <h4 className="font-semibold text-sky-700 mb-2">
                  🎯 Что входит
                </h4>
                <p className="text-sky-600">{campInfo.includes}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
