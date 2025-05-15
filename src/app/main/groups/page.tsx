"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
export default function Home() {


const headers = [
  "Id grupo",
  "Curso dictado",
  "Nombre maestro",
  "Numero estudiante",
  "Días de clase",
  "Horario de clase",
  "Estado grupo",
  "Acciones",
]
const rows = [
  {
    "Id grupo": 1,
    "Curso dictado": "Matemáticas",
    "Nombre maestro": "Juan Pérez",
    "Numero estudiante": 10,
    "Días de clase": "Lun - Mié",
    "Horario de clase": "08:00 - 10:00",
    "Estado grupo": "Activo"
  },
  
  {
    "Id grupo": 2,
    "Curso dictado": "Física",
    "Nombre maestro": "Ana Gómez",
    "Numero estudiante": 9,
    "Días de clase": "Mar - Jue",
    "Horario de clase": "10:00 - 12:00",
    "Estado grupo": "Inactivo"
  }
];


  return (
    <>
      <div className="w-full flex h-fit justify-between ">
        <SearchBar className="" placeholder="Buscar grupo"></SearchBar>
        <div className="flex gap-x-2 items-center ">
          <p className=" text-tangaroa-950 font-bold  ">Nuevo Grupo</p>
          <PlusButton className=" "></PlusButton>

          <ReloadButton className=" "  ></ReloadButton>



        </div>
      </div>
      <div>
         <GroupTable headers={headers} rows={rows} ></GroupTable>
      </div>
    </>
  );
}
