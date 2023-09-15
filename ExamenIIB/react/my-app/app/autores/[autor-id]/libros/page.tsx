'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import {LibroType} from "@/app/types/LibroType";
import Libros from "@/app/components/libros";
import {PlusCircleIcon} from "@heroicons/react/20/solid";


export default function Page({ params }: { params: { 'autor-id': number | 'create' } }) {
    const db = 'http://localhost:3001/libros';
    const [ libros, setLibros ] = useState([] as LibroType[]);
    const router = useRouter();

    useEffect(() => {
        getLibrosByAutor().then();
    }, []);

    async function getLibrosByAutor() {
        const response = await axios.get(db + `/by-autor/${params['autor-id']}`)
        if (response.statusText === 'OK') {
            setLibros(response.data);
        }
    }

    const crearLibro = () => {
        router.push(`/autores/${params['autor-id']}/libros/create`);
    };

    const deleteOperation = async (libroId: number) => {
        try {
            const response = await axios.delete(db + `/${libroId}`)

            if (response.statusText === 'OK') {
                getLibrosByAutor().then(() => undefined);
            }
        } catch (error) {
            console.error('Error borrando libro:', error);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-amber-100">
                <div className="flex items-center bg-amber-100 ">
                    <h1 className="flex flex-grow justify-center font-bold p-[10px] text-[30px]" >
                        Libros
                    </h1>
                    <button onClick={ event => {event.preventDefault();crearLibro();}}>
                        <div className="flex">
                            <div className="h-[40px] w-[40px]">
                                <PlusCircleIcon classname=" text-black"/>
                            </div>
                            <h3 className=" flex justify-center items-center font-bold">Añadir</h3>
                        </div>
                    </button>
                </div>

                <div>
                    <Libros
                        libros={libros}
                        onDelete={libroId => { deleteOperation(libroId).then() } }
                    />
                </div>
            </div>
        </>
    )
}