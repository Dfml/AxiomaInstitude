"use client";

import Image from "next/image";
import TextBox from "@/app/components/TextBox";
import { useState } from "react";
import Button from "@/app/components/Button";
import Menu from "@/app/components/Menu";
import {groupTableTitles} from "@/app/data/dataTitles"


export default function Home() {
  return (
    <div className="w-full  bg-putty-50 felx text-center ">
        <h1 className="text-black text-6xl">DASHBOARD</h1>
    </div>
  );
}
