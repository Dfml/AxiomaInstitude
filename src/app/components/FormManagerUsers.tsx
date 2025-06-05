"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

export interface DataUsers {

  Usuario: string;
  Nombre: string;
  Password: string;

}

interface UsersFormEditProps {
  data?: DataUsers;
  type: string;
  onChange?: (updated: DataUsers) => void; // opcional para enviar cambios hacia afuera
}

export default function GroupFormEdit({
  data,
  type,
  onChange,
}: UsersFormEditProps) {
  
  const [formData, setFormData] = useState<DataUsers>({

    Usuario: "",
    Nombre: "",
    Password: "",
    
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
      [name]: name === "numeroEstudiantes" ? parseInt(value) || 0 : value,
    };
    setFormData(updatedData);
    onChange?.(updatedData); // notificar cambios
  };


  return (
    <div className=" flex  gap-x-10 gap-y-6 text-[#0C2340] text-sm ">
      {/* Primera lista: 3 primeros campos */}
      <div className=" grid grid-cols-2 gap-x-4 gap-y-4">
      
          <div className="flex flex-col w-[350px]">
            <label htmlFor="Usuario" className="mb-1 font-semibold">
             Usuario*
            </label>
            <input
              type="text"
              id="Usuario"
              name="Usuario"
              disabled={type == "Delete"}
              value={formData.Usuario}
                onChange={handleChange}
              readOnly
              className="border border-[#0C2340] rounded-md px-3 py-2 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
            />
          </div>
     

       

        <div className="flex flex-col w-[350px]">
          <label htmlFor="Nombre" className="mb-1 font-semibold">
            Nombre*
          </label>
          <input
            id="Nombre"
            name="Nombre"
            value={formData.Nombre}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
        
          </input>
        </div>

         <div className="flex flex-col w-[350px]">
          <label htmlFor="Password" className="mb-1 font-semibold">
            Contraseña
          </label>
          <input
            type="text"
            id="Password"
            name="Password"
            disabled={type == "Delete"}
              onChange={handleChange}
            value={formData.Password} // asegúrate que este campo exista en formData
            className="border border-[#0C2340] rounded-md px-3 py-2 disabled:border-gray-400 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
          />
        </div>

  {type != "Delete" &&  (
         <div className="flex flex-col w-[350px]">
          <label htmlFor="Password" className="mb-1 font-semibold">
             Repetir Contraseña*
          </label>
          <input
            type="text"
            id="Password"
            name="Password"
            disabled={type == "Delete"}
              onChange={handleChange}
            value={formData.Password} // asegúrate que este campo exista en formData
            className="border border-[#0C2340] rounded-md px-3 py-2 disabled:border-gray-400 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
          />
        </div>

   )}
        
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
