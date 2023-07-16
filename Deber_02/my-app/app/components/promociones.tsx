import {useState} from "react";
import css from "styled-jsx/css";
export default function Promociones() {
    return(
        <>
            <div className="pl-[120px] pt-[40px] bg-white">
                <h1 className="text-[22px] font-bold">PROMOCIONES Y OFERTAS</h1>
                <div className="flex justify-start bg-white  pt-[30px] pb-[70px]">
                    <img src="/img_13.png" alt="" className="w-[585px] h-[384px]"/>
                    <div className="bg-[#F2F5F9] justify-center w-[615px] p-[40px] h-[384px]">
                        <div className="flex flex-grow flex-col h-[384px] justify-center">
                        <p className="text-[15px] text-[#6B6B7B]">Deportes, películas, series, shows y más ¡tú eliges!</p>
                        <p className="text-[30px] text-[#2F353D]">Conoce las aplicaciones disponibles en tu BRAVIA con Google TV™ on Android TV™</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-[#F2F5F9]">
                        <button>
                            <img src="/img_14.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}