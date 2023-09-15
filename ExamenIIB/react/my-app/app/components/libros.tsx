'use client'

import {LibroType} from "@/app/types/LibroType";
import {BiEdit} from "react-icons/bi";
import {TrashIcon} from "@heroicons/react/20/solid";

export default function Libros(params: { libros: LibroType[], onDelete: (libroId: number) => undefined, }) {
    const { libros, onDelete } = params;
    const deleteLibro = (libroId: number | undefined) => {
        if (libroId) {
            onDelete(libroId);
        }
    };
    return (
        <>
            <div>
                <table className="min-w-full">
                    <thead className="border-black border bg-blue-100">
                    <tr className="bg-blue-100 border-black border">
                        <th className="border-black border">Titulo</th>
                        <th className="border-black border">Fecha de Publicacion</th>
                        <th className="border-black border">Numero de paginas</th>
                        <th className="border-black border">Editorial</th>
                        <th className="border-black border">Genero</th>
                        <th className="border-black border">Autor</th>
                        <th className="border-black border">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {libros.map(libro => (
                        <tr className="border-t border-gray-200 bg-blue-200" key={libro.id}>
                            <td className="border-black border text-center">{ libro.titulo }</td>
                            <td className="border-black border text-center">{ new Date(libro.fechaPublicacion).toLocaleDateString() }</td>
                            <td className="border-black border text-center">{ libro.numeroPaginas }</td>
                            <td className="border-black border text-center">{ libro.editorial }</td>
                            <td className="border-black border text-center">{ libro.genero }</td>
                            <td className="border-black border text-center">{ libro.autor }</td>
                            <td className="border-black border text-center">
                                <a href={`libros/${libro.id}`}>
                                    <button >
                                        <BiEdit className="h-[30px] w-[30px] mr-[20px]"/>
                                    </button>
                                </a>
                                <button onClick={(event) => {event.preventDefault();deleteLibro(libro.id);}}>
                                    <TrashIcon className="h-[30px] w-[30px]"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}