// components/Cards.tsx

"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

export interface TeacherData {
  teacherId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseTaught: string;
  assignedGroup: string;
}

interface TeacherFormProps {
  data?: TeacherData;
  type: string;
  onChange?: (updated: TeacherData) => void;
}

export default function TeacherFormEdit({
  data,
  type,
  onChange,
}: TeacherFormProps) {
  const [formData, setFormData] = useState<TeacherData>({
    teacherId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseTaught: "",
    assignedGroup: "",
  });
  const [label, setLabel] = useState("");

  useEffect(() => {
    switch (type) {
      case "new":
        setLabel("Crear");
        break;
      case "edit":
        if (data != null) {
          setFormData(data);
        }
        setLabel("Actualizar");
        break;
      case "Delete":
        if (data != null) {
          setFormData(data);
        }
        setLabel("Eliminar");
        break;
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onChange?.({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" flex  gap-x-10 gap-y-6 text-[#0C2340] text-sm ">
      <div className=" grid grid-cols-2 gap-x-4 gap-y-4">
        {type != "new" && (
          <div className="flex flex-col w-[350px]">
            <label htmlFor="teacherId" className="mb-1 font-semibold">
              Id Maestro (Autogenerado)
            </label>
            <input
              type="text"
              id="teacherId"
              name="teacherId"
              disabled={type == "Delete"}
              value={formData.teacherId}
              onChange={handleChange}
              readOnly
              className="border border-[#0C2340] rounded-md px-3 py-2 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
            />
          </div>
        )}

        <div className="flex flex-col w-[350px]">
          <label htmlFor="firstName" className="mb-1 font-semibold">
            Nombres*
          </label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="lastName" className="mb-1 font-semibold">
            Apellidos*
          </label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="phone" className="mb-1 font-semibold">
            Telefono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            disabled={type == "Delete"}
            onChange={handleChange}
            value={formData.phone}
            className="border border-[#0C2340] rounded-md px-3 py-2 disabled:border-gray-400 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px] ">
          <label htmlFor="email" className="mb-1 font-semibold ">
            Corrreo*
          </label>
          <div className="flex items-center border border-[#0C2340] rounded-md px-3 py-2 bg-[#F0F4F8]">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              disabled={type == "Delete"}
              onChange={handleChange}
              className="w-full  bg-transparent outline-none text-[#0C2340] placeholder:italic"
            />
          </div>
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="courseTaught" className="mb-1 font-semibold">
            Curso Dictado
          </label>
          <input
            type="text"
            id="courseTaught"
            name="courseTaught"
            value={formData.courseTaught}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="assignedGroup" className="mb-1 font-semibold">
            Grupo Asignado*
          </label>
          <input
            id="assignedGroup"
            name="assignedGroup"
            value={formData.assignedGroup}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          />
        </div>

        <div className=" flex col-span-2 justify-center items-center">
          <Button
            label={label}
            className="bg-[#B15B29] h-15  text-2xl text-white font-semibold hover:bg-[#944a20] transition-colors !mt-5"
          />
        </div>
      </div>
    </div>
  );
}
