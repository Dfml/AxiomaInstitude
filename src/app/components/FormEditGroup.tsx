"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

export interface DatosGrup {
  idGrupo: number;
  curso: string;
  maestro: string;
  numeroEstudiantes: number;
  diasClase: string;
  horarioClase: string;
  estado: string;
}

interface GroupFormEditProps {
  data?: DatosGrup;
  type: string;
  onChange?: (updated: DatosGrup) => void; // opcional para enviar cambios hacia afuera
}

export default function GroupFormEdit({
  data,
  type,
  onChange,
}: GroupFormEditProps) {
  
  const [formData, setFormData] = useState<DatosGrup>({
    idGrupo: 0,
    curso: "",
    maestro: "",
    numeroEstudiantes: 0,
    diasClase: "",
    horarioClase: "",
    estado: "",
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

  const incrementStudents = () => {
    const updated = {
      ...formData,
      numeroEstudiantes: formData.numeroEstudiantes + 1,
    };
    setFormData(updated);
    onChange?.(updated);
  };

  const decrementStudents = () => {
    const updated = {
      ...formData,
      numeroEstudiantes: Math.max(0, formData.numeroEstudiantes - 1),
    };
    setFormData(updated);
    onChange?.(updated);
  };
  return (
    <div className=" flex  gap-x-10 gap-y-6 text-[#0C2340] text-sm ">
      {/* Primera lista: 3 primeros campos */}
      <div className=" grid grid-cols-2 gap-x-4 gap-y-4">
        {type != "new" && (
          <div className="flex flex-col w-[350px]">
            <label htmlFor="idGrupo" className="mb-1 font-semibold">
              Id grupo (Autogenerado)
            </label>
            <input
              type="text"
              id="idGrupo"
              name="idGrupo"
              disabled={type == "Delete"}
              value={formData.idGrupo}
                onChange={handleChange}
              readOnly
              className="border border-[#0C2340] rounded-md px-3 py-2 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
            />
          </div>
        )}

        <div className="flex flex-col w-[350px]">
          <label htmlFor="diasClase" className="mb-1 font-semibold">
            Días de clase
          </label>
          <input
            type="text"
            id="diasClase"
            name="diasClase"
            disabled={type == "Delete"}
              onChange={handleChange}
            value={formData.diasClase} // asegúrate que este campo exista en formData
            className="border border-[#0C2340] rounded-md px-3 py-2 disabled:border-gray-400 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="horarioClase" className="mb-1 font-semibold">
            Horario de clase*
          </label>
          <select
            id="horarioClase"
            name="horarioClase"
            value={formData.horarioClase}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
            <option value="" disabled>
              Selecciona un horario
            </option>
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
          </select>
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="curso" className="mb-1 font-semibold">
            Curso*
          </label>
          <select
            id="curso"
            name="curso"
            value={formData.curso}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
            <option value="" disabled>
              Selecciona un curso
            </option>
            <option value="matematicas">Matemáticas</option>
            <option value="fisica">Física</option>
          </select>
        </div>

        {/* Segunda lista: últimos 3 campos */}

        <div className="flex flex-col w-[350px]">
          <label htmlFor="estado" className="mb-1 font-semibold">
            Estado*
          </label>
          <select
            id="estado"
            name="estado"
            value={formData.estado}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
            <option value="" disabled>
              Selecciona un estado
            </option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>

        <div className="flex flex-col w-[350px]">
          <label htmlFor="maestro" className="mb-1 font-semibold">
            Maestro*
          </label>
          <select
            id="maestro"
            name="maestro"
            value={formData.maestro}
            disabled={type == "Delete"}
            onChange={handleChange}
            className="border border-[#0C2340] rounded-md px-3 py-2 text-[#0C2340] bg-[#F0F4F8]"
          >
            <option value="" disabled>
              Selecciona un maestro
            </option>
            <option value="juan">Juan Pérez</option>
            <option value="ana">Ana López</option>
          </select>
        </div>

        <div className="flex flex-col w-[350px] ">
          <label htmlFor="numeroEstudiantes" className="mb-1 font-semibold ">
            Número de estudiantes*
          </label>
          <div className="flex items-center border border-[#0C2340] rounded-md px-3 py-2 bg-[#F0F4F8]">
            <span
              onClick={decrementStudents}
              className="text-[#0C2340] font-bold text-xl px-2 cursor-pointer"
            >
              −
            </span>
            <input
              type="number"
              id="numeroEstudiantes"
              name="numeroEstudiantes"
              value={formData.numeroEstudiantes}
              disabled={type == "Delete"}
              onChange={handleChange}
              className="w-full text-center bg-transparent outline-none text-[#0C2340] placeholder:italic"
            />
            <span
              onClick={incrementStudents}
              className="text-[#0C2340] font-bold text-xl px-2 cursor-pointer"
            >
              +
            </span>
          </div>
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
