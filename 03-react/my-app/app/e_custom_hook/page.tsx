'use client'
import useSelectMoneda from "@/app/e_custom_hook/hooks/useSelectMoneda";
import {useEffect} from "react";
import {MonedasConst} from "@/app/e_custom_hook/const/monedas.const";

export default function page(){
    const [moneda,UseSelectMonedas] = useSelectMoneda('Moneda Actual 1',MonedasConst)
    useEffect(
        ()=>{
            console.log(moneda);
        },
        [moneda]
    )
    return(
        <>
            {UseSelectMonedas}
        </>
    )
}