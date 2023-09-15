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
exports.AutorEntity = void 0;
const typeorm_1 = require("typeorm");
let AutorEntity = class AutorEntity {
};
exports.AutorEntity = AutorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AutorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], AutorEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_nacimiento',
        type: 'date',
        nullable: false,
    }),
    __metadata("design:type", Date)
], AutorEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'activo',
        type: 'boolean',
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], AutorEntity.prototype, "activo", void 0);
exports.AutorEntity = AutorEntity = __decorate([
    (0, typeorm_1.Entity)('autor')
], AutorEntity);
//# sourceMappingURL=autor.entity.js.map