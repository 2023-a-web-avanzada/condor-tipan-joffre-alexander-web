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
exports.AutorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const autor_entity_1 = require("./autor.entity");
let AutorService = class AutorService {
    constructor(datasource) {
        this.datasource = datasource;
        this.autorRepository = this.datasource.getRepository(autor_entity_1.AutorEntity);
    }
    find(opciones) {
        return this.autorRepository.find(opciones);
    }
    findOneById(id) {
        return this.autorRepository.findOne({
            where: {
                id: id
            },
        });
    }
    create(datosCrear) {
        return this.autorRepository.save(datosCrear);
    }
    update(datosActualizar, id) {
        return this.autorRepository.save({ ...datosActualizar, id });
    }
    delete(id) {
        return this.autorRepository.delete(id);
    }
};
exports.AutorService = AutorService;
exports.AutorService = AutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AutorService);
//# sourceMappingURL=autor.service.js.map