"use client";

import Image from "next/image";
import { useState } from "react";

interface buttonProps {
  label: string;
  className: string;
}

export default function Button({
 label,
 className
}:buttonProps) {
  
  return (
    <button className={" bg-putty-600 rounded-sm py-2 px-4 min-w-55 w-fit mt-15 " +className}>{label}</button>
   
  );
}
