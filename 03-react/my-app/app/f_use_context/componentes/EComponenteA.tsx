// EComponenteA.tsx
import {useContext, useEffect} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import {EComponenteB} from "@/app/f_use_context/componentes/EComponenteB";

export function EComponenteA() {
    const contenedorContexto = useContext(ContenedorContext)
    useEffect(
        () => {
            console.log(
                'Cambio nombre usuario CompA',
                contenedorContexto.nombreUsuario
            )
        },
        [contenedorContexto.nombreUsuario]
    )
    return(
        <>
            <h1>Componente</h1>
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-500 m-2"} onClick={
                e=>{
                    e.preventDefault()
                    contenedorContexto.setNombreUsuario("CompA")
                }
            }>
                Actualizar
            </button>
            <br/>
            <EComponenteB></EComponenteB>
        </>
    )
}