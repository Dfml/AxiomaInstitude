"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

export interface StudentData {
  studentId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  academicRating: string;
  biblicalRating: string;
  status: boolean;
}

interface StudentFormProps {
  data?: StudentData;
  type: string;
  onChange?: (updated: StudentData) => void;
}

export default function StudentFormEdit({
  data,
  type,
  onChange,
}: StudentFormProps) {
  const [formData, setFormData] = useState<StudentData>({
    studentId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    academicRating: "",
    biblicalRating: "",
    status: false,
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
    let updatedValue: any = value;
    if (name === "status") {
      updatedValue = value === "true";
    }
    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
    onChange?.({
      ...formData,
      [name]: updatedValue,
    });
  };

  return (
    <div className=" flex  gap-x-10 gap-y-6 text-[#0C2340] text-sm ">
      <div className=" grid grid-cols-2 gap-x-4 gap-y-4">
        {type != "new" && (
          <div className="flex flex-col w-[350px]">
            <label htmlFor="studentId" className="mb-1 font-semibold">
              Id Alumno (Autogenerado)
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              disabled={type == "Delete"}
              value={formData.studentId}
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
          <label htmlFor="academicRating" className="mb-1 font-semibold">
            Valoracion Escolar*
          </label>
          <input
            type="text"
            id="academicRating"
            name="academicRating"
            value={formData.academicRating}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="biblicalRating" className="mb-1 font-semibold">
            ValoracionBiblica*
          </label>
          <input
            id="biblicalRating"
            name="biblicalRating"
            value={formData.biblicalRating}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="status" className="mb-1 font-semibold">
            Estado*
          </label>
          <select
            id="status"
            name="status"
            value={formData.status.toString()}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
            <option value="" disabled>
              Seleccione Estado
            </option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
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
