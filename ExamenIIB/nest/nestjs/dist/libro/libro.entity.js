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
exports.LibroEntity = void 0;
const typeorm_1 = require("typeorm");
let LibroEntity = class LibroEntity {
};
exports.LibroEntity = LibroEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'titulo',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], LibroEntity.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'numero_paginas',
        type: 'int',
        nullable: false,
    }),
    __metadata("design:type", Number)
], LibroEntity.prototype, "numeroPaginas", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_publicacion',
        type: 'date',
        nullable: false,
    }),
    __metadata("design:type", Date)
], LibroEntity.prototype, "fechaPublicacion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'editorial',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], LibroEntity.prototype, "editorial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'genero',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], LibroEntity.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'autor',
        type: 'int',
        nullable: false,
    }),
    __metadata("design:type", Number)
], LibroEntity.prototype, "autor", void 0);
exports.LibroEntity = LibroEntity = __decorate([
    (0, typeorm_1.Entity)('libro')
], LibroEntity);
//# sourceMappingURL=libro.entity.js.map