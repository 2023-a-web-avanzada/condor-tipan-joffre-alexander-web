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
exports.AutorController = void 0;
const common_1 = require("@nestjs/common");
const autor_service_1 = require("./autor.service");
const autor_dto_1 = require("./dto/autor.dto");
let AutorController = class AutorController {
    constructor(autorService) {
        this.autorService = autorService;
    }
    create(autor) {
        console.log(autor.nombre);
        return this.autorService.create(autor);
    }
    find() {
        const options = {};
        return this.autorService.find(options);
    }
    findOneById(id) {
        return this.autorService.findOneById(id);
    }
    update(id, autor) {
        return this.autorService.update(id, autor);
    }
    delete(id) {
        return this.autorService.delete(id);
    }
};
exports.AutorController = AutorController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [autor_dto_1.AutorDTO]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "find", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, autor_dto_1.AutorDTO]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "delete", null);
exports.AutorController = AutorController = __decorate([
    (0, common_1.Controller)('autores'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
//# sourceMappingURL=autor.controller.js.map