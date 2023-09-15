'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {AutorType} from "@/app/types/AutorType";


export default function Page({ params }: { params: { 'autor-id': number | 'create' } }) {
    const db = 'http://localhost:3001/autores';
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const router = useRouter();

    async function getAutorById(autorId: number) {
        try {
            const response = await axios.get(db + `/${autorId}`)
            if (response.statusText === 'OK') {
                if (response.data) {
                    for (const key in response.data) {
                        if (response.data.hasOwnProperty(key)) {
                            setValue(key, response.data[key]);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error buscando autor:', error);
        }
    }

    useEffect(() => {
        if (params['autor-id'] !== 'create') {
            console.log(params['autor-id'])
            getAutorById(params['autor-id']).then();
        }
    }, []);

    async function crearAutor(autor: AutorType) {
        console.log(autor.nombre)
        console.log(autor.fechaNacimiento)
        console.log(autor.activo)
        try {
            const response = await axios.post(db + '/create', autor);

            if (response.statusText === 'Created') {
                router.push("../autores");
            }
        } catch (error) {
            console.log('Error creando autor:', error);
        }
    }

    async function actualizarAutor(autorId: number, autor: AutorType) {
        try {
            const response = await axios.put(db + `/${ autorId }`, autor);

            if (response.statusText === 'OK') {
                router.push("../autores");
            }
        } catch (error) {
            console.log('Error actualizando autor: ', error);
        }
    }

    const onSubmit = (data: any) => {
        console.log(data.nombre)
        console.log(data.fechaNacimiento)
        if (params['autor-id'] !== 'create') {
            actualizarAutor(params['autor-id'], data as AutorType).then();
        }
        else {
            crearAutor(data as AutorType).then();
        }
    };

    return (
        <>
            <div className="min-h-screen bg-amber-100">
                <div className="flex justify-center bg-amber-100 p-[10px]">
                    <h3 className="text-[30px] font-bold" >
                        { params['autor-id'] !== 'create' ? 'Edición Autor':'Creación Autor' }
                    </h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2>Formulario para crear un autor</h2>
                    <form className="mt-[10px] p-4 border-black border" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block mb-1">Nombre:</label>
                            <input
                                {...register('nombre', { required: true })}
                            />
                            {errors.nombre && <p className="text-red-500">Nombre requerido</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Fecha de nacimiento:</label>
                            <input
                                type="date"
                                {...register('fechaNacimiento', { required: true })}
                            />
                            {errors.fechaNacimiento && <p className="text-red-500">Fecha de publicacion requerida</p>}
                        </div>
                        <div className="flex mb-[15px]">
                            <label >Activo:</label>
                            <input className="ml-2" type="checkbox" {...register('activo')} />
                        </div>

                        <button className="bg-blue-500 text-white p-[7px] rounded-[5px] mr-[20px]" type="submit">
                            Guardar
                        </button>
                        <a href={'../autores'} className="inline-block bg-red-500 hover:bg-red-600 text-white p-[7px] rounded-[5px]">
                            Cancelar
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}