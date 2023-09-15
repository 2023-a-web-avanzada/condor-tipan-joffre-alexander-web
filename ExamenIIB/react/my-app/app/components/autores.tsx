import {useState} from "react";
import {AutorType} from "@/app/types/AutorType";
import axios from 'axios';
import {BookOpenIcon, TrashIcon} from "@heroicons/react/20/solid";
import {BiEdit} from "react-icons/bi";
const db = 'http://localhost:3001/autor'
export default function Autores(parametros: { autores: AutorType[], onDelete: (autorId: number) => undefined,}){
    const {autores, onDelete} = parametros

    const deleteAutor = (autorId: number | undefined) => {
        if(autorId){
            onDelete(autorId)
        }
    }

    return (
        <div>
            <table className="min-w-full">
                <thead className="border-black border bg-blue-100">
                <tr className="bg-blue-100 border-black border">
                    <th className="border-black border">Nombre</th>
                    <th className="border-black border">Fecha de Nacimiento</th>
                    <th className="border-black border">¿Sigue escribiendo?</th>
                    <th className="border-black border">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {autores.map(autor => (
                    <tr className="border-t border-gray-200 bg-blue-200" key={ autor.id }>
                        <td className="border-black border text-center">{ autor.nombre }</td>
                        <td className="border-black border text-center">{ autor.fechaNacimiento.toString() }</td>
                        <td className="border-black border text-center">{ autor.activo ? 'Si' : 'No'}</td>
                        <td className="border-black border text-center">
                            <a href={`autores/${ autor.id }/libros`}>
                                <button className="h-[30px] w-[30px] mr-[20px]">
                                    <BookOpenIcon/>
                                </button>
                            </a>
                            <a href={`autores/${ autor.id }`}>
                                <button >
                                    <BiEdit className="h-[30px] w-[30px] mr-[20px]"/>
                                </button>
                            </a>
                            <button onClick={ event => {event.preventDefault();deleteAutor(autor.id);}}>
                                <TrashIcon className="h-[30px] w-[30px]"/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}