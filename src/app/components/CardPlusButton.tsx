// components/Cards.tsx
import { Plus } from "lucide-react";
import { Children } from "react";

interface CardsPlusButton {
  label: string;
 
  
}

export default function Cards( ) {
  return (
    <>
   <button className="w-90 h-80 bg-putty-50 rounded-xl text-tangaroa-950 flex items-center justify-center  shadow-lg  transition-all hover:text-putty-50 hover:bg-tangaroa-950"><Plus size={150}></Plus> </button>
    {Children}
      </>

  );
}
