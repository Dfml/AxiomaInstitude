"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

export interface DataStudents {
  idAlumno: number;
  Nombres: string;
  Apellidos: string;
  Corrreo: string;
  Telefono: string;
  ValoracionEscolar: string;
  ValoracionBiblica: string;
  Estado:boolean;
}

interface DatosStudentsProps {
  data?: DataStudents;
  type: string;
  onChange?: (updated: DataStudents) => void; // opcional para enviar cambios hacia afuera
}

export default function StudentsFormEdit({
  data,
  type,
  onChange,
}: DatosStudentsProps) {
  
  const [formData, setFormData] = useState<DataStudents>({
    idAlumno: 0,
    Nombres: "",
    Apellidos: "",
    Corrreo: "",
    Telefono: "",
    ValoracionEscolar: "",
    ValoracionBiblica: "",
    Estado:false,
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
    const updatedData = {
      ...formData,
      [name]: name === "Corrreo" ? parseInt(value) || 0 : value,
    };
    setFormData(updatedData);
    onChange?.(updatedData); // notificar cambios
  };

 
  return (
    
    <div className=" flex  gap-x-10 gap-y-6 text-[#0C2340] text-sm ">
     

      <div className=" grid grid-cols-2 gap-x-4 gap-y-4">
        {type != "new" && (
          <div className="flex flex-col w-[350px]">
            <label htmlFor="idAlumno" className="mb-1 font-semibold">
              Id Alimno (Autogenerado)
            </label>
            <input
              type="text"
              id="idAlumno"
              name="idAlumno"
              disabled={type == "Delete"}
              value={formData.idAlumno}
                onChange={handleChange}
              readOnly
              className="border border-[#0C2340] rounded-md px-3 py-2 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
            />
          </div>
        )}

        <div className="flex flex-col w-[350px]">
          <label htmlFor="Nombres" className="mb-1 font-semibold">
            Nombres*
          </label>
          <input
            id="Nombres"
            name="Nombres"
            value={formData.Nombres}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >

          </input>
        </div>

         <div className="flex flex-col w-[350px]">
          <label htmlFor="Apellidos" className="mb-1 font-semibold">
            Apellidos*
          </label>
          <input
            id="Apellidos"
            name="Apellidos"
            value={formData.Apellidos}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
          </input>
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="Telefono" className="mb-1 font-semibold">
            Telefono
          </label>
          <input
            type="text"
            id="Telefono"
            name="Telefono"
            disabled={type == "Delete"}
              onChange={handleChange}
            value={formData.Telefono} // asegúrate que este campo exista en formData
            className="border border-[#0C2340] rounded-md px-3 py-2 disabled:border-gray-400 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
          />
        </div>

            <div className="flex flex-col w-[350px] ">
          <label htmlFor="Corrreo" className="mb-1 font-semibold ">
            Corrreo*
          </label>
          <div className="flex items-center border border-[#0C2340] rounded-md px-3 py-2 bg-[#F0F4F8]">
        
            <input
              type="text"
              id="Corrreo"
              name="Corrreo"
              value={formData.Corrreo}
              disabled={type == "Delete"}
              onChange={handleChange}
              className="w-full  bg-transparent outline-none text-[#0C2340] placeholder:italic"
            />
          </div>
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="ValoracionEscolar" className="mb-1 font-semibold">
            Valoracion Escolar*
          </label>
          <input
            type="text"
            id="ValoracionEscolar"
            name="ValoracionEscolar"
            value={formData.ValoracionEscolar}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
    
          </input>
        </div>

        


        <div className="flex flex-col w-[350px]">
          <label htmlFor="ValoracionBiblica" className="mb-1 font-semibold">
            ValoracionBiblica*
          </label>
          <input
            id="ValoracionBiblica"
            name="ValoracionBiblica"
            value={formData.ValoracionBiblica}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
         
          </input>
        </div>

       

    

         <div className="flex flex-col w-[350px]">
          <label htmlFor="Estado" className="mb-1 font-semibold">
           Estado*
          </label>
          <select
            id="Estado"
            name="Estado"
            value={formData.Estado.toString()}
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
