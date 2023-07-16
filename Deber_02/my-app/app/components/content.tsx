import {useState} from "react";
import css from "styled-jsx/css";

export default function Content() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <div className="relative">
                <img src="/img_6.png" alt="portada" className="w-full h-[495px]"/>
                    <div className="absolute top-[100px] left-[150px] w-[396,53px] h-[287,96px] bg-black bg-opacity-80 p-[30px] items-center">
                        <h2 className="text-white text-[15px]">α6700</h2>
                        <h3 className="text-white text-[38px] pr-[60px] leading-[45px]">La próxima <br/> generación de<br/>creatividad</h3>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Mas información</button>
                    </div>
            </div>
        </>
    )
}