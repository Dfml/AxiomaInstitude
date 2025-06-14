"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
import Modal from "@/app/components/Modal"
import FormEditGroup from "@/app/components/FormGroup";

import { DatosGrup } from "@/app/components/FormGroup";


import React, {  useState } from 'react';

  
 


export default function Home() {
const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo ] = useState<DatosGrup>({idGrupo:0,curso: "",maestro: "",numeroEstudiantes: 0, diasClase: "",horarioClase: "",estado: ""});
const handleInfoToModal = (info:DatosGrup) => {
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
    "Id grupo",
    "Curso dictado",
    "Nombre maestro",
    "Numero estudiante",
    "Días de clase",
    "Horario de clase",
    "Estado grupo",
    "Acciones",
  ]
  const rows = [
    {
      idGrupo:1,curso: "fisica",maestro: "",numeroEstudiantes: 100, diasClase: "asdasd",horarioClase: "",estado: ""
    },

    {
     idGrupo:2,curso: "fisica",maestro: "",numeroEstudiantes: 0, diasClase: "asdasd",horarioClase: "",estado: ""
    }
  ];



  return (
    <>
      <div className="w-full flex h-fit justify-between ">
        <SearchBar className="" placeholder="Buscar grupo"></SearchBar>
        <div className="flex gap-x-2 items-center ">
          <p className=" text-tangaroa-950 font-bold  ">Nuevo Grupo</p>
          <PlusButton OpenOnPlusModal={()=> handleOpenModal(true,"new")} className=" "></PlusButton>
          <ReloadButton className=" "  ></ReloadButton>
        </div>
      </div>
      <div>
        <GroupTable headers={headers} rows={rows} OpenOnEditModal={() => {handleOpenModal(true,"edit")}} onEditButton={handleInfoToModal}  OpenOnDeletetModal={() => {handleOpenModal(true,"Delete")}}/>
        <Modal   isOpen={isModalOpenEdit} onClose={() => handleOpenModal(false,"edit")}>
            <FormEditGroup  data={actualInfo} onChange={setActualInfo} type={typeOfModal} ></FormEditGroup>
        </Modal>
      </div>
    </>
  );
}
