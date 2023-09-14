import React from "react";

export default function Subasta(props) {
    const {imagen, descripcion, valor, estado} = props
    return (
        <>
            {
                estado === false ?
                    <div className="flex flex-col items-center">
                        <h1 className=" justify-center items-center text-[20px] text-blue-700">${valor}</h1>
                        <div className="flex text-[20px]">
                            <div className="flex flex-col flex-grow ml-[50px]">
                                <h2 className="text-[20px] text-white">Objeto en subasta</h2>
                                <h3 className="text-[20px] text-white">{descripcion}</h3>
                                <img src={imagen} className="flex flex-grow"></img>
                            </div>
                        </div>
                    </div> :
                    <div className="text-[70px] text-red-700">Vendido</div>


            }
        </>
    )
}