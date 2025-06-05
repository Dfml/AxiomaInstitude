'use client';

import Cards from "@/app/components/Cards"
import CardPlusButton from "@/app/components/CardPlusButton"; // Si tienes este componente
import React, {  useState } from 'react';
import FormManagerUsers from "@/app/components/FormManagerUsers";
import {DataUsers} from "@/app/components/FormManagerUsers";
import Modal from "@/app/components/Modal"





export default function Home() {

  

const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo ] = useState<DataUsers>({Usuario:"",Nombre:"", Password:"" });
const handleInfoToModal = (info:DataUsers) => {
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
    usuario: "Usuario",
    nombre: "Lorem",
    contrasena: "contraseña",
  },
   {
    usuario: "Usuario",
    nombre: "Lorem",
    contrasena: "lorem",
  }
  
];



  return (
    <div className="p-10 flex flex-wrap gap-6">
      {dataCart.map((item, index) => (
        <Cards OpenOnEditModal={() => {handleOpenModal(true,"edit")}} onEditButton={()=>handleInfoToModal({Usuario:item.usuario,Nombre:item.nombre,Password:item.contrasena })}  OpenOnDeletetModal={() => {handleOpenModal(true,"Delete")}} 
          
          key={index}
          label={item.usuario}
          data={[
            { label: "Nombre", value: item.nombre },
            { label: "Contraseña", value: item.contrasena, isPassword: true },
          ]}
        />
      ))}
      <CardPlusButton OpenOnPlusModal={()=> handleOpenModal(true,"new")} ></CardPlusButton>

      <Modal   isOpen={isModalOpenEdit} onClose={() => handleOpenModal(false,"edit")}>
        <FormManagerUsers data={actualInfo} onChange={setActualInfo} type={typeOfModal}></FormManagerUsers>
      </Modal>
    </div>
  );
}
