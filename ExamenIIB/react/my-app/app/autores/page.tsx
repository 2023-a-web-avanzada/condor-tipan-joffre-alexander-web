'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import {AutorType} from "@/app/types/AutorType";
import Autores from "@/app/components/autores";
import {PlusCircleIcon} from "@heroicons/react/20/solid";

export default function Page() {
    const db = 'http://localhost:3001/autores';
    const [ autores, setAutores ] = useState([] as AutorType[]);
    const router = useRouter();

    const deleteOperation = async (autorId: number) => {
        try {
            const response = await axios.delete(db + `/${autorId}`)
            if (response.statusText === 'OK') {
                getAutores().then(() => undefined);
            }
        } catch (error) {
            console.error('Error borrando el autor', error);
        }
    };

    useEffect(() => {
        getAutores().then();
    }, []);

    async function getAutores() {
        const response = await axios.get(db)

        if (response.statusText === 'OK') {
            setAutores(response.data);
        }
    }
    const crearAutor = () => {
        router.push("/autores/create");
    };

    return (
        <>
            <div className="min-h-screen bg-amber-100">
                <div className="flex items-center">
                    <h1 className="flex flex-grow justify-center font-bold p-[10px] text-[30px]">Autores</h1>
                    <button className="flex text-black" onClick={ event => {event.preventDefault();crearAutor();}}>
                        <div className="flex">
                        <div className="h-[40px] w-[40px]">
                        <PlusCircleIcon classname=" text-black"/>
                        </div>
                            <h3 className="flex justify-center items-center font-bold">Añadir</h3>
                        </div>
                    </button>
                </div>
                <div>
                    <Autores
                        autores={autores}
                        onDelete={autorId => { deleteOperation(autorId).then() } }
                    />
                </div>
            </div>
        </>
    )
}