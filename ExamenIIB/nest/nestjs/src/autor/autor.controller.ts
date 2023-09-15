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
import {AutorService} from "./autor.service";
import {AutorDTO} from "./dto/autor.dto";
import {validate} from "class-validator";
import {AutorEntity} from "./autor.entity";
@Controller('autores') // path de la ruta
export class AutorController {
    constructor(
        private readonly autorService: AutorService
    ) {
    }

    @Post("create")
    create(@Body() autor: AutorDTO):Promise<AutorDTO & AutorEntity> {
        console.log(autor.nombre)
        return this.autorService.create(autor);
    }
    @Get()
    find(): Promise<AutorEntity[]> {
        const options = {};
        return this.autorService.find(options);
    }
    @Get("/:id")
    findOneById(@Param('id') id: number):Promise<AutorEntity> {
        return this.autorService.findOneById(id);
    }

    @Put(":id") // PUT /usuario/:id
    update(@Param('id') id: number, @Body() autor: AutorDTO):Promise<UpdateResult> {
        return this.autorService.update(id, autor);
    }

    @Delete(":id")
    delete(@Param('id') id:number):Promise<DeleteResult> {
        return this.autorService.delete(id);
    }
}