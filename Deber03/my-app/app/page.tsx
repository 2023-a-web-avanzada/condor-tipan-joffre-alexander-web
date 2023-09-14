'use client'
import io from "socket.io-client"

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Formulario} from "@/app/types/formulario";
import {SubastaProps} from "@/app/types/subasta-props";
import Subasta from "@/app/components/Subasta";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export default function Page() {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [subasta, setSubasta] = useState([] as SubastaProps[]);
    const [message, setMessage] = useState('');
    const [pintura1, setPintura1] = useState({
        producto: "img1.png",
        descripcion: "La noche estrellada, de Vincent Van Gogh",
        valor: "4000",
        estado: false
    });

    const [pintura2, setPintura2] = useState({
        producto: "img2.png",
        descripcion: "Guernica, de Pablo Picasso",
        valor: "2000",
        estado: false
    });

    const [pintura3, setPintura3] = useState({
        producto: "img3.png",
        descripcion: "La persistencia de la memoria, de Salvador Dalí",
        valor: "1000",
        estado: false
    });

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            objetoSubastado: '',
            user: '',
            valor: '',
        },
        mode: 'all'
    })
    const showMessage = (text:string, duration:number) => {
        setMessage(text);
        setTimeout(() => {
            setMessage('');
        }, duration);
    };


    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoUnirseSala', (data: {objetoSubastado: string, user:string}) => {
                showMessage(`El usuario ${data.user} se ha unido a la sala`,4000)
            });
            socket.on('escucharEventoPujaSala', (data: { objetoSubastado: string, user: string, valor: string}) => {
                if(data.objetoSubastado == "img1.png"){
                    if (Number(data.valor) > Number(pintura1.valor)) {
                        pintura1.valor = data.valor
                        setSubasta([pintura1]);
                        showMessage(`El usuario ${data.user} ha ofertado ${data.valor}`,4000)
                        setTimeout( () => {
                            pintura1.estado = true
                            revisarEstado(data)
                        }, 5000);
                    }else{
                        showMessage(`El usuario ${data.user} ha hecho una oferta insuficiente`,4000)
                    }
                }else if(data.objetoSubastado == "img2.png"){
                    if (Number(data.valor) > Number(pintura2.valor)) {
                        pintura2.valor = data.valor
                        setSubasta([pintura2]);
                        showMessage(`El usuario ${data.user} ha ofertado ${data.valor}`,4000)
                        setTimeout(() => {
                            pintura2.estado = true
                            revisarEstado(data)
                        }, 500000);

                    }else{
                        showMessage(`El usuario ${data.user} ha hecho una oferta insuficiente`,4000)
                    }
                }else if(data.objetoSubastado == "img3.png"){
                    if (Number(data.valor) > Number(pintura3.valor)) {
                        pintura2.valor = data.valor
                        setSubasta([pintura3]);
                        showMessage(`El usuario ${data.user} ha ofertado ${data.valor}`,4000)
                        setTimeout(() => {
                            pintura3.estado = true
                            revisarEstado(data)
                            },500000)

                    }else{
                        showMessage(`El usuario ${data.user} ha hecho una oferta insuficiente`,2000)
                    }
                }
            });
            socket.on('escucharCambioValor', (data: { objetoSubastado: string, user: string, valor: string}) => {
                    if(data.objetoSubastado == "img1.png"){
                        if (Number(data.valor) > Number(pintura1.valor)) {
                            pintura1.valor = data.valor
                        }
                    }else if(data.objetoSubastado == "img2.png"){
                        if (Number(data.valor) > Number(pintura2.valor)) {
                            pintura2.valor = data.valor
                        }
                    }else if(data.objetoSubastado == "img3.png"){
                        if (Number(data.valor) > Number(pintura3.valor)) {
                            pintura3.valor = data.valor
                        }
                    }
                }
            );
        },
        []
    )
    const estaConectado = () => {
        if (isConnected) {
            return <span>Conectado :)</span>
        } else {
            return <span>Desconectado :(</span>
        }
    }
    useEffect(
        () => {
            console.log("cambio estado")
        }, [pintura1.estado]
    )
    useEffect(
        () => {
            console.log("cambio estado")
        }, [pintura2.estado]
    )
    useEffect(
        () => {
            console.log("cambio estado")
        }, [pintura3.estado]
    )
    const revisarEstado = (data:Formulario) => {
        if(data.objetoSubastado == "img1.png"){
            setSubasta([pintura1])
        }else if(data.objetoSubastado == "img2.png"){
            setSubasta([pintura2])
        }else if(data.objetoSubastado == "img3.png"){
            setSubasta([pintura3])
        }
    }
    const unirseSalaOEnviarMensajeASala = (data: Formulario) => {
        if (data.valor === "0") {
            // unimos a la sala
            const dataEventoUnirseSala = {
                objetoSubastado: data.objetoSubastado,
                user: data.user.toString(),
            };
            socket.emit(
                'unirseSala', // Nombre Evento
                dataEventoUnirseSala, //  Datos evento
                () => { // Callback o respuesta del evefnto
                    console.log('Escuchando evento UnirseSala:', data.objetoSubastado, socket.id);
                    if(data.objetoSubastado == "img1.png"){
                        setSubasta([pintura1])
                    }else if(data.objetoSubastado == "img2.png"){
                        setSubasta([pintura2])
                    }else if(data.objetoSubastado == "img3.png"){
                        setSubasta([pintura3])
                    }
                }
            );
        } else {
            const dataEventoEnviarMensajeSala = {
                objetoSubastado: data.objetoSubastado,
                user: data.user,
                valor: data.valor
            };
            socket.emit(
                'enviarPuja', // Nombre Evento
                dataEventoEnviarMensajeSala, //  Datos evento
                () => { // Callback o respuesta del evefnto
                    if(data.objetoSubastado == "img1.png"){
                        if (Number(data.valor) > Number(pintura1.valor)) {
                            pintura1.valor = data.valor
                            setSubasta([pintura1]);
                            setTimeout(() => {
                                pintura1.estado = true
                                revisarEstado(data)
                            }, 5000);

                        }
                    }else if(data.objetoSubastado == "img2.png"){
                        if (Number(data.valor) > Number(pintura2.valor)) {
                            pintura2.valor = data.valor
                            setSubasta([pintura2]);
                            setTimeout(() => {
                                pintura2.estado = true
                                revisarEstado(data)
                            }, 5000);

                        }
                    }else if(data.objetoSubastado == "img3.png"){
                        if (Number(data.valor) > Number(pintura3.valor)) {
                            pintura3.valor = data.valor
                            setSubasta([pintura3]);
                            setTimeout(() => {
                                pintura3.estado = true
                                revisarEstado(data)
                            }, 5000);

                        }
                    }
                }
            );
        }
    }

    return (
        <>
            <div className="flex bg-black flex-grow min-h-screen justify-center items-center">
                <div className="flex flex-col pl-[12px] justify-center">
                    <h1 className="flex items-center justify-center text-[25px] text-white">Formulario para subasta</h1>
                    <form onSubmit={handleSubmit(unirseSalaOEnviarMensajeASala)}
                          className="m-2 p-4 border-2 border-amber-200">
                        <div className="mb-3">
                            <label htmlFor="objetoSubastado" className="form-label pr-[10px] text-white">Objeto</label>
                            <select
                                className="form-control text-amber-600"
                                id="objetoSubastado"
                                {...register('objetoSubastado', {required: 'Seleccionar objeto'})}
                                aria-describedby="salaObjetoHelp">
                                <option value="">Seleccionar...</option>
                                <option value="img1.png">Opción 1</option>
                                <option value="img2.png">Opción 2</option>
                                <option value="img3.png">Opción 3</option>
                            </select>
                            <div id="salaObjetoHelp" className="form-text">
                                Selecciona un objeto
                            </div>
                            {errors.objetoSubastado &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.objetoSubastado.message}
                                </div>
                            }
                            <label htmlFor="valor" className="form-label pr-[10px] text-white">Valor de oferta</label>
                            <input type="number"
                                   className="form-control text-amber-600"
                                   placeholder="EJ: 2000"
                                   id="valor"
                                   {...register('valor', {required: 'Valor de oferta requerido'})}
                                   aria-describedby="valorHelp"/>
                            <div id="valorHelp" className="form-text">
                                Ingresa el valor de tu oferta
                            </div>
                            {errors.valor &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.valor.message}
                                </div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user" className="form-label pr-[10px] text-white">Usuario</label>
                            <input type="text"
                                   className="form-control text-amber-600"
                                   placeholder="EJ: Adrian"
                                   id="user"
                                   {...register('user', {required: 'Usuario requerido'})}
                                   aria-describedby="usuarioHelp"/>
                            <div id="usuarioHelp" className="form-text">
                                Ingresa tu usuario
                            </div>
                            {errors.user &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.user.message}
                                </div>
                            }
                        </div>
                        <button type="submit"
                                disabled={!isValid}
                                className="flex flex-grow items-center justify-center bg-blue-500 rounded-[10px] p-[10px] ">
                            Unirse sala
                        </button>
                    </form>
                </div>
                <div className="flex flex-col flex-grow min-h-screen">
                    <div className="flex flex-grow justify-center font-bold">
                        <div className="flex flex-col min-h-screen">
                            <div className="flex flex-col justify-center items-center min-h-screen">
                                <h1 className="text-[20px]  text-white">Subastas</h1>
                                <div className="flex flex-col flex-grow items-center">
                                    <h1 className="text-[20px]  text-white">Valor actual:</h1>
                                    <div className="text-white">{message}</div>
                                    {subasta.map((subasta, indice)=>
                                        <Subasta key={indice}
                                                 imagen={subasta.producto}
                                                 descripcion={subasta.descripcion}
                                                 valor={subasta.valor}
                                                 estado={subasta.estado}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}