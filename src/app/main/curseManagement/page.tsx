
"use client";

import { Plus} from "lucide-react";
import Cards from "@/app/components/Cards";
import CardPlusButton from "@/app/components/CardPlusButton";
import Modal from "@/app/components/Modal";
import FormManagerCourse from "@/app/components/FormManageCourse"
import{CourseData} from "@/app/components/FormManageCourse"
import React, {  useState } from 'react';







export default function Home() {


const [isModalOpenEdit, setIsModalOpenEdit ] = useState(false);
const [typeOfModal, setTypeOfModal ] = useState("");

const [actualInfo, setActualInfo ] = useState<CourseData>({courseName:"", });
const handleInfoToModal = (info:CourseData) => {
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
    course: "Mathematics",
    activeGroups: "00000",
    availableTeachers: "0000",
    designation: "LXLXLXL",
    enrolledStudents: "0000",
  },
  {
    course: "Bible",
    activeGroups: "00001",
    availableTeachers: "0003",
    designation: "MXMXMXM",
    enrolledStudents: "0012",
  }
];




  return (
      <div className="p-10 flex flex-wrap gap-6">
      {dataCart.map((item, index) => (
        <Cards OpenOnEditModal={() => {handleOpenModal(true,"edit")}} onEditButton={()=>handleInfoToModal({courseName:item.course})}  OpenOnDeletetModal={() => {handleOpenModal(true,"Delete")}} 
          key={index}
          label={`${item.course}`}
          data={[
            { label: "Grupos Activos", value: item.activeGroups },
            { label: "Maestros Libres", value: item.availableTeachers },
            { label: "Designación", value: item.designation },
            { label: "Estudiantes inscritos", value: item.enrolledStudents },
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
