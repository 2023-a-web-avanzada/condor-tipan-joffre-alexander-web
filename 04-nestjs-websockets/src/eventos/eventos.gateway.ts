import {ConnectedSocket,MessageBody,SubscribeMessage,WebSocketGateway} from "@nestjs/websockets";
import {Server,Socket} from 'socket.io';
import {EventosService} from "./eventos.service";
@WebSocketGateway(
    11202, // puerto donde esta escuchando el sevidor de websockets
    {
        cors:{
            origin: '*', // Habilitando la conexión desde cualquier IP
        }
    }
)
export class EventosGateway{
    constructor(private readonly _eventosService:EventosService){

    }
    @SubscribeMessage('hola') // Nombre del metodo para recibir eventos
    devolverHola(
        @MessageBody()
        message:{mensaje: string },
        @ConnectedSocket()
        socket: Socket // import {Server, Socket} from 'socket.io';
    ){
        console.log('message', message);
        socket.broadcast // broadcast => TODOS LOS CLIENTES Conectados Y que esten escuchando el evento "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharEventoHola', // Nombre evento que vamos a enviar a los clientes conectados
                { // Objeto a enviar
                    mensaje: this._eventosService.saludar() + ' ' + message.mensaje
                }
            );
        return {mensaje: 'ok'}; // Callback del emtodo "hola"
    }

    @SubscribeMessage('unirseSala') // Nombre metodo "unirseSala"
    unirseSala(
        @MessageBody()
        message: {salaId: string, nombre: string }, // parametros metodo
        @ConnectedSocket()
        socket: Socket
    ){
        socket.join(message.salaId); // socket.join a grupa a los clientes de websockets
                                     // segun un identificador. Al unirse a una sala
                                     // podemos escuchar los mensajes de esa sala.
        const mensajeDeBienvenidaSala = {
            mensaje: `Bienvenido ${message.nombre} a la sala ${message.salaId}`};
            socket.broadcast
                .to(message.salaId) // Manda el mensaje a un grupo especifico segun el identificador
                .emit('escucharEventoUnirseSala', // Los que escuchan el evento en este grupo
                    mensajeDeBienvenidaSala // reciben este mensaje
                    );
            return {mensaje: 'ok'}; // Callback del metodo "unirseSala"
    }

    @SubscribeMessage('enviarMensaje') // nombre del metodo "enviarMensaje"
    enviarMensaje(
        @MessageBody()
        message: { salaId: string, nombre: string, mensaje: string},
        @ConnectedSocket()
        socket: Socket
    ){
        // backend
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast
            .to(message.salaId) // sala a la que le enviamos el mensaje
            .emit('escucharEventomensajeSala', mensajeSala); // nombre del evento y datos a enviar
        return {mensaje: 'ok'}; // Callback
    }
}

