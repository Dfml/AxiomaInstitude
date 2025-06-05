"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
import {DataStudents} from "@/app/components/FormStudents";
import FormStudents from "@/app/components/FormStudents"; 
import  Modal from "@/app/components/Modal"

import React, {  useState } from 'react';




export default function Home() {
const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo ] = useState<DataStudents>({idAlumno:0,Nombres: "",Apellidos: "",Corrreo: "", Telefono: "",ValoracionEscolar: "",ValoracionBiblica: "", Estado:false});
const handleInfoToModal = (info:DataStudents) => {
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
  "ID Alumno",
  "Nombres",
  "Apellidos",
  "Correo",
  "Teléfono",
  "Valoración Escolar",
  "Valoración Bíblica",
  "Estado",
  "Acciones"
];

const rows = [
  {
    idAlumno: 1,
    Nombres: "Juan",
    Apellidos: "Pérez",
    Corrreo: "juan.perez@example.com",
    Telefono: "123456789",
    ValoracionEscolar: "Excelente",
    ValoracionBiblica: "Buena",
    Estado: true
  },
  {
    idAlumno: 2,
    Nombres: "María",
    Apellidos: "González",
    Corrreo: "maria.gonzalez@example.com",
    Telefono: "987654321",
    ValoracionEscolar: "Regular",
    ValoracionBiblica: "Excelente",
    Estado: false
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
                <FormStudents  data={actualInfo} onChange={setActualInfo} type={typeOfModal} ></FormStudents>
            </Modal>
          </div>
    
    
    
    
    </>
  );
}
