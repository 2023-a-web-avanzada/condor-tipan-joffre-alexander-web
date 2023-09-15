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
const libro_service_1 = require("./libro.service");
const libro_dto_1 = require("./dto/libro.dto");
let LibroController = class LibroController {
    constructor(libroService) {
        this.libroService = libroService;
    }
    create(libro) {
        return this.libroService.create(libro);
    }
    find(autorId) {
        return this.libroService.find(autorId);
    }
    findById(id) {
        return this.libroService.findOneById(id);
    }
    update(id, libro) {
        return this.libroService.update(id, libro);
    }
    delete(id) {
        return this.libroService.delete(id);
    }
};
exports.LibroController = LibroController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [libro_dto_1.LibroDTO]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('by-autor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "find", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, libro_dto_1.LibroDTO]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "delete", null);
exports.LibroController = LibroController = __decorate([
    (0, common_1.Controller)('libros'),
    __metadata("design:paramtypes", [libro_service_1.LibroService])
], LibroController);
//# sourceMappingURL=libro.controller.js.map