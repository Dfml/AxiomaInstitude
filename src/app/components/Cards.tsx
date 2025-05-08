"use client";


import { useState } from "react";
import { Trash2,  Pencil} from "lucide-react";

interface CardsProps {
  label: string;
  className: string;

  gruposActivos:string;
  maestroLibre:string;
  designacion: string;
  cantidadEstudiantes:string;


}

export default function Cards({label , className, gruposActivos, maestroLibre, designacion, cantidadEstudiantes }: CardsProps) {
  return (
    <div className="w-90 "> 
      <div className="bg-tangaroa-950 w-full h-25 rounded-t-2xl flex justify-end ">
        <button className="h-5 p-3 hover:text-red-800 transition-all"><Trash2 ></Trash2></button>  
      </div>
      <div className=" flex  bg-putty-100 w-full h-55 rounded-b-2xl text-tangaroa-950 justify-between px-10 py-5">
          <ul className=" ">
            <li className="text-[20px] font-bold">Curso 1</li>
            <li>Grupos activos</li>
            <li>Maestros libres</li>
            <li>Designacion</li>
            <li>Cantidad de estudiantes</li>
          </ul>

          <ul >
            <li><Pencil size={30} ></Pencil></li>
            <li>{gruposActivos} </li>
            <li>{maestroLibre} </li>
            <li>{designacion}</li>
            <li>{cantidadEstudiantes} </li>
          </ul>
      </div>
    </div>
  );
}
