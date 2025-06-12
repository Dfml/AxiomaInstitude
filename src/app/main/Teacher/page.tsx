"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
import {TeacherData} from "@/app/components/FormTeacher";
import FormTeacher from "@/app/components/FormTeacher"; 
import  Modal from "@/app/components/Modal"

import React, {  useState } from 'react';




export default function Home() {
const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [teacherInfo, setTeacherInfo ] = useState<TeacherData>({
  teacherId: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  courseTaught: "",
  assignedGroup: ""
});
const handleInfoToModal = (info:TeacherData) => {
    setTeacherInfo (info);
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
    teacherId: 1,
    firstName: "Carlos",
    lastName: "Ramírez",
    email: "carlos.ramirez@example.com",
    phone: "321654987",
    courseTaught: "Matemáticas",
    assignedGroup: "Grupo A"
  },
  {
    teacherId: 2,
    firstName: "Lucía",
    lastName: "Fernández",
    email: "lucia.fernandez@example.com",
    phone: "654987321",
    courseTaught: "Historia",
    assignedGroup: "Grupo B"
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
                <FormTeacher  data={teacherInfo} onChange={setTeacherInfo} type={typeOfModal} ></FormTeacher>
            </Modal>
          </div>
    
    
    
    
    </>
  );
}
