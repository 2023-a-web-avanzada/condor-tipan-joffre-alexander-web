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
exports.LibroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const libro_entity_1 = require("./libro.entity");
let LibroService = class LibroService {
    constructor(datasource) {
        this.datasource = datasource;
        this.libroRepository = this.datasource.getRepository(libro_entity_1.LibroEntity);
    }
    create(datosCrear) {
        return this.libroRepository.save(datosCrear);
    }
    find(autorId) {
        return this.libroRepository.find({
            where: {
                autor: autorId,
            }
        });
    }
    findOneById(id) {
        return this.libroRepository.findOne({
            where: {
                id: id,
            }
        });
    }
    update(id, libro) {
        return this.libroRepository.update(id, libro);
    }
    delete(id) {
        return this.libroRepository.delete(id);
    }
};
exports.LibroService = LibroService;
exports.LibroService = LibroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], LibroService);
//# sourceMappingURL=libro.service.js.map