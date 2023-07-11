// EComponenteB.tsx
import EComponenteC from "@/app/f_use_context/componentes/EComponenteC";
import {useContext} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";

export function EComponenteB(){
    const contenedorContexto = useContext(ContenedorContext)
    return(
        <>
            Componente B
            <p>{contenedorContexto.nombreUsuario}</p>
            <button onClick={ e=>{
                e.preventDefault();
                contenedorContexto.setNombreUsuario('CompB')
            }
            }>
                Actualizar
            </button>
            <EComponenteC></EComponenteC>
        </>)
}