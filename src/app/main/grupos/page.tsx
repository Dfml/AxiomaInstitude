"use client";

import Image from "next/image";
import TextBox from "@/app/components/TextBox";
import { useState } from "react";
import Button from "@/app/components/Button";
import Menu from "@/app/components/Menu";
import BarraBusqueda from "@/app/components/BarraBusqueda";



export default function Home() {
  return (
    <>
    <div className="w-full flex h-fit justify-between  ">
      <BarraBusqueda className=""></BarraBusqueda>
      <div className="flex gap-x-2 ">
        <p className=" text-tangaroa-950 font-bold ">Nuevo Grupo</p>
        

      </div>
    </div>
    <div></div>
    </>
  );
}
