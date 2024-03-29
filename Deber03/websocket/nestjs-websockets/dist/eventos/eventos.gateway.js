"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const eventos_service_1 = require("./eventos.service");
let EventosGateway = class EventosGateway {
    constructor(_eventosService) {
        this._eventosService = _eventosService;
    }
    unirseSala(message, socket) {
        console.log('message', message);
        socket.join(message.objetoSubastado);
        socket.broadcast
            .to(message.objetoSubastado)
            .emit('escucharEventoUnirseSala', message);
        return { mensaje: 'ok' };
    }
    enviarPuja(message, socket) {
        socket.broadcast
            .to(message.objetoSubastado)
            .emit('escucharEventoPujaSala', message);
        socket.broadcast
            .emit('escucharCambioValor', message);
        return { mensaje: 'ok' };
    }
};
exports.EventosGateway = EventosGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('unirseSala'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "unirseSala", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarPuja'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarPuja", null);
exports.EventosGateway = EventosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(11202, {
        cors: {
            origin: '*',
        }
    }),
    __metadata("design:paramtypes", [eventos_service_1.EventosService])
], EventosGateway);
//# sourceMappingURL=eventos.gateway.js.map