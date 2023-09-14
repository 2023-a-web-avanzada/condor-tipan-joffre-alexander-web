import {Socket} from "socket.io-client";
import {Dispatch, SetStateAction} from "react";

export interface ContenedorContextSocket {
    socket: Socket;
    img: string;
    setImg: Dispatch<SetStateAction<string>>;
    nuevoUser: string;
    setNuevoUser: Dispatch<SetStateAction<string>>;
    objetoSubastado1: string;
    setObjetoSubastado1: Dispatch<SetStateAction<string>>;
    valor: number;
    setValor: Dispatch<SetStateAction<number>>;
    valor1: number;
    setValor1: Dispatch<SetStateAction<number>>;
    valor2: number;
    setValor2: Dispatch<SetStateAction<number>>;
    valor3: number;
    setValor3: Dispatch<SetStateAction<number>>;
}