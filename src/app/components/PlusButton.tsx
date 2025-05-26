"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus  } from "lucide-react";
import { Children } from "react";

interface PlusbuttonProps {
  OpenOnPlusModal:() => void;
  className: string;

}

export default function PlusButton({ className, OpenOnPlusModal}: PlusbuttonProps) {

  
  return (
    <>
    <button   onClick={OpenOnPlusModal} className={"felx bg-tangaroa-900 rounded-xl justify-center p-2 hover:bg-tangaroa-950 transition-all" + className}>
    <Plus ></Plus>
    </button>
   
    </>
  );
}
