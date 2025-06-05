"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
import {DataTeacher} from "@/app/components/FormTeacher";
import FormTeacher from "@/app/components/FormTeacher"; 
import  Modal from "@/app/components/Modal"

import React, {  useState } from 'react';




export default function Home() {
const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo ] = useState<DataTeacher>({idMaestro:0,Nombres: "",Apellidos: "",Corrreo: "", Telefono: "",CursoDictado: "",GrupoAsignado: ""});
const handleInfoToModal = (info:DataTeacher) => {
    setActualInfo (info);
    // Aquí podrías hacer un fetch o llamar a una función que haga la petición a tu API
  };

  const handleOpenModal = ( action:boolean, type:string) => {
    setTypeOfModal(type);
    setIsModalOpenEdit(action);
  };
const handleUpdate = () => {
    console.log("Datos a actualizar:", rows);
    // Aquí podrías hacer un fetch o llamar a una función que haga la petición a tu API
  };



const headers = [
  "ID Maestro",
  "Nombres",
  "Apellidos",
  "Correo",
  "Teléfono",
  "Curso Dictado",
  "Grupo Asignado",
  "Acciones"
];

const rows = [
  {
    idMaestro: 1,
    Nombres: "Carlos",
    Apellidos: "Ramírez",
    Corrreo: "carlos.ramirez@example.com",
    Telefono: "321654987",
    CursoDictado: "Matemáticas",
    GrupoAsignado: "Grupo A"
  },
  {
    idMaestro: 2,
    Nombres: "Lucía",
    Apellidos: "Fernández",
    Corrreo: "lucia.fernandez@example.com",
    Telefono: "654987321",
    CursoDictado: "Historia",
    GrupoAsignado: "Grupo B"
  }
];


  return (
    
    <>
     <div className="w-full flex h-fit justify-between ">
            <SearchBar className="" placeholder="Buscar grupo"></SearchBar>
            <div className="flex gap-x-2 items-center ">
              <p className=" text-tangaroa-950 font-bold  ">Nuevo Grupo</p>
              <PlusButton OpenOnPlusModal={()=> handleOpenModal(true,"new")} className=" ">
    
              
    
              </PlusButton>
    
    
              <ReloadButton className=" "  ></ReloadButton>
            </div>
          </div>
          <div>
            <GroupTable headers={headers} rows={rows} OpenOnEditModal={() => {handleOpenModal(true,"edit")}} onEditButton={handleInfoToModal}  OpenOnDeletetModal={() => {handleOpenModal(true,"Delete")}}/>
            <Modal   isOpen={isModalOpenEdit} onClose={() => handleOpenModal(false,"edit")}>
                <FormTeacher  data={actualInfo} onChange={setActualInfo} type={typeOfModal} ></FormTeacher>
            </Modal>
          </div>
    
    
    
    
    </>
  );
}
