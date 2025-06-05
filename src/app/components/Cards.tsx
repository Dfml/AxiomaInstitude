import { Trash2, Pencil, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface CardsProps {
  
  label: string;
  data: {
    label: string;
    value: string | number;
    isPassword?: boolean; // Identifica si es campo contraseña
    

  }[];
    OpenOnEditModal: () => void;
    OpenOnDeletetModal: () => void;
    onEditButton:() => void;
}

export default function Cards({  label, data,onEditButton,OpenOnEditModal,OpenOnDeletetModal}: CardsProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-90 mr-10 shadow-lg rounded-2xl overflow-hidden">
      <div className="bg-tangaroa-950 w-full h-25 flex justify-end">
        <button onClick={()=>{OpenOnDeletetModal(),onEditButton()}} className="h-5 p-3 hover:text-red-800 transition-all">
          <Trash2 />
        </button>
      </div>
      <div className="flex bg-putty-50 w-full h-full  text-tangaroa-950 justify-between px-10 py-5 ">
        <ul>
          <li className="text-[20px] font-bold">{label}</li>
          {data.map((item, idx) => (
            <li key={idx}>{item.label}</li>
          ))}
        </ul>
        <ul>
          <li onClick={()=>{onEditButton(),OpenOnEditModal()}}  ><Pencil size={30} /></li>
          {data.map((item, idx) => {
            if (item.isPassword) {
              return (
                <li key={idx} className="flex items-center gap-2">
                  <span>{showPassword ? item.value : "**********"}</span>
                  <button
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                    onMouseLeave={() => setShowPassword(false)}
                    className="focus:outline-none"
                    aria-label="Mostrar contraseña"
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </li>
              );
            }
            return <li key={idx}>{item.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

