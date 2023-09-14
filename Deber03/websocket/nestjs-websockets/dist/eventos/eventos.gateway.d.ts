import { Socket } from 'socket.io';
import { EventosService } from "./eventos.service";
export declare class EventosGateway {
    private readonly _eventosService;
    constructor(_eventosService: EventosService);
    unirseSala(message: {
        objetoSubastado: string;
        user: string;
    }, socket: Socket): {
        mensaje: string;
    };
    enviarPuja(message: {
        objetoSubastado: string;
        user: string;
        valor: string;
    }, socket: Socket): {
        mensaje: string;
    };
}
