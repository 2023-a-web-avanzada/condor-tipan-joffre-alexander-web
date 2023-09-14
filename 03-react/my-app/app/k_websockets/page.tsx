'use client'
import io from "socket.io-client"
import {MensajeChatProps, Posicion} from "@/app/k_websockets/types/mensaje-chat-props";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import MensajeChat from "@/app/k_websockets/components/MensajeChat";
import {FormularioModelo} from "@/app/k_websockets/types/formulario-modelo";
import {Formulario} from "@/app/k_websockets/types/formulario";
import {SubastaProps} from "@/app/k_websockets/types/subasta-props";
import Subasta from "@/app/k_websockets/components/Subasta";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export default function Page() {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [subasta, setSubasta] = useState([] as SubastaProps[]);
    const [pintura1, setPintura1] = useState({
        producto: "img1.png",
        descripcion: "Pintura La noche estrellada de Van Gogh",
        valor: "4000"
    });

    const [pintura2, setPintura2] = useState({
        producto: "img2.png",
        descripcion: "Pintura La noche estrellada de Van Gogh",
        valor: "2000"
    });

    const [pintura3, setPintura3] = useState({
        producto: "img1.png",
        descripcion: "Pintura La noche estrellada de Van Gogh",
        valor: "1000"
    });

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            objetoSubastado: '',
            user: '',
            valor: '',
        },
        mode: 'all'
    })

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
                console.log(data.user)
            });
            socket.on('escucharEventoPujaSala', (data: { objetoSubastado: string, user: string, valor: string}) => {
                console.log(data.valor)
                console.log(data.objetoSubastado, "es", data.valor," ", pintura1.valor)
                console.log("aassa",pintura1.valor)
                if(data.objetoSubastado == "img1.png"){
                    if (Number(data.valor) > Number(pintura1.valor)) {
                        pintura1.valor = data.valor
                        setSubasta([pintura1]);
                        console.log("aassa",pintura1.valor)
                    }
                }else if(data.objetoSubastado == "img2.png"){
                    if (Number(data.valor) > Number(pintura2.valor)) {
                        pintura2.valor = data.valor
                        setSubasta([pintura2]);
                    }
                }else if(data.objetoSubastado == "img3.png"){
                    if (Number(data.valor) > Number(pintura2.valor)) {
                        pintura2.valor = data.valor
                        setSubasta([pintura2]);
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
                        if (Number(data.valor) > Number(pintura2.valor)) {
                            pintura2.valor = data.valor
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
                        }
                    }else if(data.objetoSubastado == "img2.png"){
                        if (Number(data.valor) > Number(pintura2.valor)) {
                            pintura2.valor = data.valor
                            setSubasta([pintura2]);
                        }
                    }else if(data.objetoSubastado == "img3.png"){
                        if (Number(data.valor) > Number(pintura3.valor)) {
                            pintura3.valor = data.valor
                            setSubasta([pintura3]);
                        }
                    }
                }
            );
        }
    }

    return (
        <>
            <div className="flex">
                <div className="flex">
                    <form onSubmit={handleSubmit(unirseSalaOEnviarMensajeASala)}
                          className="m-2 p-4 border-2 border-pink-500">
                        <div className="mb-3">
                            <label htmlFor="objetoSubastado" className="form-label">Objeto</label>
                            <select
                                className="form-control"
                                id="objetoSubastado"
                                {...register('objetoSubastado', {required: 'Seleccionar objeto'})}
                                aria-describedby="salaObjetoHelp">
                                <option value="">Seleccionar...</option>
                                <option value="img1.png">Opción 1</option>
                                <option value="img2.png">Opción 2</option>
                                <option value="3">Opción 3</option>
                            </select>
                            <div id="salaObjetoHelp" className="form-text">
                                Selecciona un objeto
                            </div>
                            {errors.objetoSubastado &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.objetoSubastado.message}
                                </div>
                            }
                            <label htmlFor="valor" className="form-label">Valor de oferta</label>
                            <input type="number"
                                   className="form-control"
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
                            <label htmlFor="user" className="form-label">Usuario</label>
                            <input type="text"
                                   className="form-control"
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
                                className="bg-blue-500">
                            Unirse sala
                        </button>
                    </form>
                </div>
                <div>
                    {subasta.map((subasta, indice)=>
                        <Subasta key={indice}
                                 imagen={subasta.producto}
                                 descripcion={subasta.descripcion}
                                 valor={subasta.valor}
                        />
                    )}
                </div>
            </div>
        </>
    )
}