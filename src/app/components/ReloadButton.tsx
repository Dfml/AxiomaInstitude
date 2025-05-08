"use client";

import Image from "next/image";
import { useState } from "react";
import { RotateCcw } from "lucide-react";

interface ReloadbuttonProps {
  className: string;
}

export default function ReloadButton({ className }: ReloadbuttonProps) {
  return (
    <button className={"felx bg-tangaroa-900 rounded-xl justify-center p-2 hover:bg-tangaroa-800 transition-all" + className}>
      <RotateCcw></RotateCcw>
    </button>
  );
}
