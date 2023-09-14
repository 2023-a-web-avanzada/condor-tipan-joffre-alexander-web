import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {Column, FindManyOptions, FindOptionsWhere, Like, PrimaryGeneratedColumn} from "typeorm";
import {LibroService} from "./libro.service";
import {UsuarioCreateDto} from "./dto/libro-create.dto";
import {validate} from "class-validator";
import {LibroEntity} from "./libro.entity";
import {LibroUpdateDto} from "./dto/libro-update.dto";
@Controller('libro') // path de la ruta
// http://localhost:3000/usuario/
// @Controller('usuario/asd/qwe')
// http://localhost:3000/usuario/asd/qwe
export class LibroController {
    constructor(
        private readonly libroService: LibroService
    ) {
    }

    @Get("/:id") // GET /usuario/:id = /usuario/1
    @HttpCode(200)
    findOneById(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        // +"1" = 1
        return this.libroService.findOneById(+params.id);
    }

    @Delete("/:id") // DELETE /usuario/:id  = /usuario/1
    @HttpCode(200)
    delete(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        return this.libroService.delete(+params.id);
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new UsuarioCreateDto();
        nuevoRegistro.titulo = bodyParams.titulo;
        nuevoRegistro.numeroPaginas = bodyParams.numeroPaginas;
        nuevoRegistro.fechaPublicacion = bodyParams.fechaPublicacion;
        nuevoRegistro.editorial = bodyParams.editorial
        nuevoRegistro.genero = bodyParams.genero;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.libroService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new LibroUpdateDto();
        nuevoRegistro.titulo = bodyParams.titulo;
        nuevoRegistro.numeroPaginas = bodyParams.numeroPaginas;
        nuevoRegistro.fechaPublicacion = bodyParams.fechaPublicacion;
        nuevoRegistro.editorial = bodyParams.editorial
        nuevoRegistro.genero = bodyParams.genero;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.libroService.update(
            bodyParams,
            +params.id
        );
    }

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<LibroEntity> = {
            relations:['autor'],
            // select: ['id'], // Select
            // relations: { //  Relaciones
            //     notas: true
            // },
            where: {},
            skip: queryParams.skip ? +queryParams.skip : 0 , // 2 * 0 = 0 ; 2 * 1 = 2; 2 * 2 = 4;
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<LibroEntity>[]
        if(queryParams.titulo){
            consultaWhere.push({
                titulo: Like('%' + queryParams.titulo + '%')
            })
        }
        if(queryParams.apellidos){
            consultaWhere.push({
                numeroPaginas: Like('%' + queryParams.apellidos + '%')
            })
        }
        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        return this.libroService.find(consulta);
    }
}