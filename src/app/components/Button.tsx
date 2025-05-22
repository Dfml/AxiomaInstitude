"use client";

import Image from "next/image";
import { useState } from "react";



interface buttonProps {
  label: string;
  className: string;
  onClick?: () => void; // Agrega esta línea
}

export default function Button({ label, className, onClick }: buttonProps) {
  return (
    <button
      onClick={onClick} // Ejecuta la función al hacer clic
      className={"bg-putty-600 rounded-sm py-2 px-4 min-w-55 w-fit mt-15 " + className}
    >
      {label}
    </button>
  );
}
