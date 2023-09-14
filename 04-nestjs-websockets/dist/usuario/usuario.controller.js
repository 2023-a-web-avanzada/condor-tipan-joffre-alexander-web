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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let UsuarioController = exports.UsuarioController = class UsuarioController {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioController.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_nombres',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], UsuarioController.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_apellidos',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], UsuarioController.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_rol',
        type: 'varchar',
        length: 1,
        nullable: false,
        default: 'U',
        comment: 'U = usuario; A = administrador;'
    }),
    __metadata("design:type", String)
], UsuarioController.prototype, "rol", void 0);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario')
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map