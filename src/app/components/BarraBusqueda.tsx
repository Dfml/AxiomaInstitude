"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

interface BarraBusquedaProps {
  className: string;
}

export default function Button({ className }: BarraBusquedaProps) {
  return (
    <div className={"flex  items-center border border-tangaroa-950 rounded-md bg-tangaroa-50 px-3 py-2 w-150" + className}>
      <input
        type="text"
        placeholder="Buscar grupo"
        className="flex-1 bg-transparent outline-none placeholder-[rgba(43,44,44,1)] text-tangaroa-950"
      />
      <Search className="text-[rgba(43,44,44,1)] w-4 h-4" />
    </div>
  );
}
