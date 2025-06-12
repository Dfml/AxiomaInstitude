"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
import { StudentData } from "@/app/components/FormStudents";
import StudentFormEdit from "@/app/components/FormStudents"; 
import  Modal from "@/app/components/Modal"

import React, {  useState } from 'react';




export default function Home() {
const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo] = useState<StudentData>({
  studentId: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  academicRating: "",
  biblicalRating: "",
  status: false,
});
const handleInfoToModal = (info: StudentData) => {
  setActualInfo(info);
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

const rows: StudentData[] = [
  {
    studentId: 1,
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@example.com",
    phone: "123456789",
    academicRating: "Excelente",
    biblicalRating: "Buena",
    status: true
  },
  {
    studentId: 2,
    firstName: "María",
    lastName: "González",
    email: "maria.gonzalez@example.com",
    phone: "987654321",
    academicRating: "Regular",
    biblicalRating: "Excelente",
    status: false
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
              <StudentFormEdit  data={actualInfo} onChange={setActualInfo} type={typeOfModal} />
            </Modal>
          </div>
    
    
    
    
    </>
  );
}
