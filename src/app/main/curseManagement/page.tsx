
"use client";

import { Plus} from "lucide-react";
import Cards from "@/app/components/Cards";
import CardPlusButton from "@/app/components/CardPlusButton";
import Modal from "@/app/components/Modal";
import FormManagerCourse from "@/app/components/FormManageCourse"
import{DataCours} from "@/app/components/FormManageCourse"
import React, {  useState } from 'react';







export default function Home() {


const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo ] = useState<DataCours>({NombreCurso:"", });
const handleInfoToModal = (info:DataCours) => {
    setActualInfo (info);
    // Aquí podrías hacer un fetch o llamar a una función que haga la petición a tu API
  };

  const handleOpenModal = ( action:boolean, type:string) => {
    setTypeOfModal(type);
    setIsModalOpenEdit(action);
  };
const handleUpdate = () => {
    console.log("Datos a actualizar:",);
    // Aquí podrías hacer un fetch o llamar a una función que haga la petición a tu API
  };


const dataCart = [
  {
    curso: "Matemáticas",
    gruposActivos: "00000",
    maestrosLibres: "0000",
    designacion: "LXLXLXL",
    cantidadEstudiantes: "0000",
  },
  {
    curso: "Biblia",
    gruposActivos: "00001",
    maestrosLibres: "0003",
    designacion: "MXMXMXM",
    cantidadEstudiantes: "0012",
  }
];




  return (
      <div className="p-10 flex flex-wrap gap-6">
      {dataCart.map((item, index) => (
        <Cards OpenOnEditModal={() => {handleOpenModal(true,"edit")}} onEditButton={()=>handleInfoToModal({NombreCurso:item.curso})}  OpenOnDeletetModal={() => {handleOpenModal(true,"Delete")}} 
          key={index}
          label={`${item.curso}`}
          data={[
            { label: "Grupos Activos", value: item.gruposActivos },
            { label: "Maestros Libres", value: item.maestrosLibres },
            { label: "Designación", value: item.designacion },
            { label: "Estudiantes inscritos", value: item.cantidadEstudiantes },
          ]}
        />
      ))}

        <CardPlusButton OpenOnPlusModal={()=> handleOpenModal(true,"new")} ></CardPlusButton>

             <Modal   isOpen={isModalOpenEdit} onClose={() => handleOpenModal(false,"edit")}>
              <FormManagerCourse data={actualInfo} onChange={setActualInfo} type={typeOfModal}></FormManagerCourse>
            </Modal>
    </div>
  );
}
