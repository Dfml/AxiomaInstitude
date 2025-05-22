"use client";
import { X } from "lucide-react";
import Button from "@/app/components/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function UpdateGroupModal({ 
  children, 
  isOpen, 
  onClose, 

}: ModalProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-putty-50 rounded-lg p-10 w-[810px] max-w-full  relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-amber-700 hover:text-amber-500"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {children}

      
      </div>
    </div>
  );
}
