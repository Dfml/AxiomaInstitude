"use client";


import Button from "@/app/components/Button";
import Menu from "@/app/components/Menu";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
export default function Home() {

  return (
    <>
      <div className="w-full flex h-fit justify-between ">
        <SearchBar className=""></SearchBar>
        <div className="flex gap-x-2 items-center ">
          <p className=" text-tangaroa-950 font-bold  ">Nuevo Grupo</p>
          <PlusButton className=" "></PlusButton>

          <ReloadButton className=" "  ></ReloadButton>



        </div>
      </div>
      <div>
        <GroupTable></GroupTable>
      </div>
    </>
  );
}
