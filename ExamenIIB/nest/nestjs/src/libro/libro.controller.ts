import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {
    Column,
    DeleteResult,
    FindManyOptions,
    FindOptionsWhere,
    Like,
    PrimaryGeneratedColumn,
    UpdateResult
} from "typeorm";

import {validate} from "class-validator";
import {LibroEntity} from "./libro.entity";
import {LibroService} from "./libro.service";
import {LibroDTO} from "./dto/libro.dto";

@Controller('libros') // path de la ruta
// http://localhost:3000/usuario/
// @Controller('usuario/asd/qwe')
// http://localhost:3000/usuario/asd/qwe
export class LibroController {
    constructor(
        private readonly libroService: LibroService
    ) {
    }

    @Post('create')
    create(@Body() libro: LibroDTO): Promise<LibroDTO & LibroEntity> {
        return this.libroService.create(libro);
    }

    @Get('by-autor/:id')
    find(@Param('id') autorId: number): Promise<LibroEntity[]> {
        return this.libroService.find(autorId);
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<LibroEntity> {
        return this.libroService.findOneById(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() libro: LibroDTO): Promise<UpdateResult> {
        return this.libroService.update(id, libro);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<DeleteResult> {
        return this.libroService.delete(id);
    }
}