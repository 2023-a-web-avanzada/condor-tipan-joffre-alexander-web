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
exports.LibroController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const libro_service_1 = require("./libro.service");
const libro_create_dto_1 = require("./dto/libro-create.dto");
const class_validator_1 = require("class-validator");
const libro_update_dto_1 = require("./dto/libro-update.dto");
let LibroController = class LibroController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    findOneById(params) {
        return this.usuarioService.findOneById(+params.id);
    }
    delete(params) {
        return this.usuarioService.delete(+params.id);
    }
    async create(bodyParams) {
        const nuevoRegistro = new libro_create_dto_1.UsuarioCreateDto();
        nuevoRegistro.titulo = bodyParams.titulo;
        nuevoRegistro.numeroPaginas = bodyParams.numeroPaginas;
        nuevoRegistro.fechaPublicacion = bodyParams.fechaPublicacion;
        nuevoRegistro.editorial = bodyParams.editorial;
        nuevoRegistro.genero = bodyParams.genero;
        const arregloErrores = await (0, class_validator_1.validate)(nuevoRegistro);
        if (arregloErrores.length > 0) {
            console.error({ arregloErrores });
            throw new common_1.BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.usuarioService.create(nuevoRegistro);
    }
    async update(params, bodyParams) {
        const nuevoRegistro = new libro_update_dto_1.LibroUpdateDto();
        nuevoRegistro.titulo = bodyParams.titulo;
        nuevoRegistro.numeroPaginas = bodyParams.numeroPaginas;
        nuevoRegistro.fechaPublicacion = bodyParams.fechaPublicacion;
        nuevoRegistro.editorial = bodyParams.editorial;
        nuevoRegistro.genero = bodyParams.genero;
        const arregloErrores = await (0, class_validator_1.validate)(nuevoRegistro);
        if (arregloErrores.length > 0) {
            console.error({ arregloErrores });
            throw new common_1.BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.usuarioService.update(bodyParams, +params.id);
    }
    find(queryParams) {
        const consulta = {
            relations: ['autor'],
            where: {},
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [];
        if (queryParams.titulo) {
            consultaWhere.push({
                titulo: (0, typeorm_1.Like)('%' + queryParams.titulo + '%')
            });
        }
        if (queryParams.apellidos) {
            consultaWhere.push({
                numeroPaginas: (0, typeorm_1.Like)('%' + queryParams.apellidos + '%')
            });
        }
        if (consultaWhere.length > 0) {
            consulta.where = consultaWhere;
        }
        return this.usuarioService.find(consulta);
    }
};
exports.LibroController = LibroController;
__decorate([
    (0, common_1.Get)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "create", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("/"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "find", null);
exports.LibroController = LibroController = __decorate([
    (0, common_1.Controller)('libro'),
    __metadata("design:paramtypes", [libro_service_1.LibroService])
], LibroController);
//# sourceMappingURL=libro.controller.js.map