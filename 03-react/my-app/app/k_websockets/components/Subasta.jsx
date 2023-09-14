import React from "react";

export default function Subasta(props) {
    const {imagen, descripcion, valor} = props
    return (
        <>
            <div className="col-sm-6 ">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[20px]">Subastas</h1>
                        <div className="flex flex-col flex-grow items-center">
                            <h1 className="text-[20px]">Valor actual:</h1>
                            <h1 className=" justify-end text-[20px] text-blue">{valor}</h1>
                        </div>
                        <div className="flex justify-center">{}</div>
                    </div>
                    <div className="flex text-[20px]">
                        <div className="flex flex-col flex-grow ml-[50px]">
                            <h2 className="text-[20px]">Objeto en subasta</h2>
                            <img src={imagen}></img>
                            <h3 className="text-[20px]">{descripcion}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}