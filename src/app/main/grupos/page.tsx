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
    <div className="w-full  bg-putty-50 py-19 px-25 ">
      
      <BarraBusqueda className=""></BarraBusqueda>
    </div>

    <div></div>
    </>
    
  );
}
