"use client";

import Image from "next/image";
import TextBox from "@/app/components/TextBox";
import { useState } from "react";
import Button from "@/app/components/Button";
import Menu from "@/app/components/Menu";
import SearchBar from "@/app/components/SearchBar";

import GroupTable from "@/app/components/Table";

export default function Home() {
  return (
    <>
    <div className="w-full flex h-fit justify-between  ">
      <SearchBar className=""></SearchBar>
      <div className="flex gap-x-2 ">
        <p className=" text-tangaroa-950 font-bold ">Nuevo Grupo</p>
        

      </div>
    </div>
    <div>
      <GroupTable></GroupTable>
    </div>
    </>
  );
}
