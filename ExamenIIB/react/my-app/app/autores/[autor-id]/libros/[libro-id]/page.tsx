'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";
import axios from 'axios';
import {AutorType} from "@/app/types/AutorType";
import {LibroType} from "@/app/types/LibroType";

export default function Page({ params }: { params: { 'autor-id': number, 'libro-id': number | 'create' } }) {
    const librosU = 'http://localhost:3001/libros';
    const autoresU = 'http://localhost:3001/autores';
    const [ autores, setAutores ] = useState([] as AutorType[]);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const router = useRouter();

    useEffect(() => {
        getAutores().then();

        if (params['libro-id'] !== 'create') {
            getLibroById(params['libro-id']).then();
        }
    }, []);

    useEffect(() => {
        setValue('autor', params['autor-id']);
    }, [autores]);

    async function getAutores() {
        const response = await axios.get(autoresU)

        if (response.statusText === 'OK') {
            setAutores(response.data);
        }
    }

    async function getLibroById(libroId: number) {
        try {
            const response = await axios.get(librosU + `/${libroId}`)

            if (response.statusText === 'OK') {
                if (response.data) {
                    for (const key in response.data) {
                        if (response.data.hasOwnProperty(key)) {
                            if (key === 'fechaPublicacion') {
                                const fechaPub = new Date(response.data[key]);
                                setValue(key, fechaPub.toISOString().split('T')[0]);
                            } else {
                                setValue(key, response.data[key]);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error buscando libro', error);
        }
    }

    async function crearLibro(libro: LibroType) {
        console
        try {
            const response = await axios.post(librosU + '/create', libro);

            if (response.statusText === 'Created') {
                router.push("../libros");
            }
        } catch (error) {
            console.log('Error creando libro:', error);
        }
    }

    async function actualizarLibro(libroId: number, libro: LibroType) {
        try {
            const response = await axios.put(librosU + `/${ libroId }`, libro);
            if (response.statusText === 'OK') {
                router.push("../libros");
            }
        } catch (error) {
            console.log('Error actualizando libro:', error);
        }
    }

    const onSubmit = (data: any) => {
        if (params['libro-id'] !== 'create') {
            actualizarLibro(params['libro-id'], data as LibroType).then();
        }
        else {
            crearLibro(data as LibroType).then();
        }
    };

    return (
        <>
            <div className="min-h-screen bg-amber-100">
                <div className="flex flex-grow justify-center p-[10px] ">
                    <h3 className="text-[30px] font-bold">
                        { params['libro-id'] !== 'create' ? 'Edicion de libro' : 'Creacion de libro' }
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <form className="mt-[10px] border border-black p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col">
                                <label className="block mb-1">Titulo:</label>
                                <input
                                    {...register('titulo', { required: true })}
                                />
                                {errors.titulo && <p className="text-red-500">Título requerido</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="text-left">Fecha de publicacion:</label>
                                <input
                                    className="flex flex-grow"
                                    type="date"
                                    {...register('fechaPublicacion', { required: true })}
                                />
                                {errors.fechaPublicacion && <p className="text-red-500">Fecha de publicación requerida</p>}
                            </div>
                            <div className="flex flex-col">
                                <label >Número de páginas:</label>
                                <input
                                    {...register('numeroPaginas', { required: true})}
                                />
                                {errors.numeroPaginas?.type === 'required' && (
                                    <p className="text-red-500">Número de páginas requerido</p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label >Editorial:</label>
                                <input
                                    {...register('editorial', { required: true })}
                                />
                                {errors.editorial && <p className="text-red-500">Editorial requerida</p>}
                            </div>
                            <div className="flex flex-col">
                                <label>Genero:</label>
                                <input
                                    {...register('genero', { required: true })}
                                />
                                {errors.genero && <p className="text-red-500">Genero requerido</p>}
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <button className="bg-blue-500 text-white p-[7px] rounded-[5px] mr-[20px]" type="submit">
                                Guardar
                            </button>
                            <a href="../libros" className="inline-block bg-red-500 hover:bg-red-600 text-white p-[7px] rounded-[5px]">
                                Cancelar
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}