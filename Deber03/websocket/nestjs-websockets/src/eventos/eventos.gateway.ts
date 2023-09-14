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

    @SubscribeMessage('unirseSala') // Nombre metodo "unirseSala"
    unirseSala(
        @MessageBody()
        message: {objetoSubastado: string, user: string }, // parametros metodo
        @ConnectedSocket()
        socket: Socket
    ){
        console.log('message', message);
        socket.join(message.objetoSubastado);
            socket.broadcast
                .to(message.objetoSubastado)
                .emit('escucharEventoUnirseSala',
                    message
                );
            return {mensaje: 'ok'};
    }

    @SubscribeMessage('enviarPuja') // nombre del metodo "enviarMensaje"
    enviarPuja(
        @MessageBody()
        message: { objetoSubastado: string, user: string, valor: string},
        @ConnectedSocket()
        socket: Socket
    ){
        socket.broadcast
            .to(message.objetoSubastado)
            .emit('escucharEventoPujaSala', message);
        socket.broadcast
            .emit('escucharCambioValor', message)
        // nombre del evento y datos a enviar
        return {mensaje: 'ok'}; // Callback
    }
}

