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
      <DialogContent className="sm:max-w-md rounded-3xl bg-gray-800/95 backdrop-blur-md border border-gray-600">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            Как попасть в лагерь
          </DialogTitle>
          <DialogDescription className="text-gray-200 leading-relaxed">
            <div className="space-y-4">
              <div className="bg-gray-700/50 p-4 rounded-2xl border border-gray-600">
                <h4 className="font-semibold text-white mb-2">
                  📞 Свяжитесь с нами
                </h4>
                <p className="text-gray-200">Телефон: {campInfo.phone}</p>
                <p className="text-gray-200">Email: {campInfo.email}</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-2xl border border-gray-600">
                <h4 className="font-semibold text-white mb-2">
                  📅 Возраст участников
                </h4>
                <p className="text-gray-200">{campInfo.ageRange}</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-2xl border border-gray-600">
                <h4 className="font-semibold text-white mb-2">💰 Стоимость</h4>
                <p className="text-gray-200">{campInfo.price}</p>
              </div>
              <div className="bg-sky-600/30 p-4 rounded-2xl border border-sky-400/50">
                <h4 className="font-semibold text-sky-200 mb-2">
                  🎯 Что входит
                </h4>
                <p className="text-sky-100">{campInfo.includes}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
