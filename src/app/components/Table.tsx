'use client'
import { Pencil, Trash2,Copy , PlusCircle, RotateCcw, Search } from "lucide-react";

export default function GroupTable() {
  const rows = Array(12).fill(null); // Simulación de datos vacíos

  return (
    <div className=" mt-10 rounded-lg">
     
   

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-tangaroa-950 ">
          <thead className="bg-blue-900  text-white">
            <tr>
              {[
                "Id grupo", "Curso dictado", "Nombre maestro", "Numero estudiante",
                "Días de clase", "Horario de clase", "Estado grupo", "Acciones"
              ].map((header) => (
                <th key={header} className="border border-tangaroa-950 px-2 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((_, index) => (
              <tr key={index} className="border  text-center hover:bg-blue-50">
                {Array(7).fill("-").map((val, i) => (
                  <td key={i} className="border px-2 py-1  border-tangaroa-950">{val}</td>
                ))}
                <td className="  flex-1  border border-tangaroa-950 ">
                  <button className="pl-3"><Pencil size={16} className="text-blue-900" /></button>
                  <button className="pl-3"><Trash2 size={16} className="text-red-500" /></button>
                  <button className="pl-3"><Copy size={16} className="text-blue-900"></Copy></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
