import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {Column, FindManyOptions, FindOptionsWhere, Like, PrimaryGeneratedColumn} from "typeorm";
import {AutorService} from "./autor.service";
import {AutorCreateDto} from "./dto/autor-create.dto";
import {validate} from "class-validator";
import {AutorEntity} from "./autor.entity";
import {AutorUpdateDto} from "./dto/autor-update.dto";
@Controller('autor') // path de la ruta
// http://localhost:3000/usuario/
// @Controller('usuario/asd/qwe')
// http://localhost:3000/usuario/asd/qwe
export class AutorController {
    constructor(
        private readonly usuarioService: AutorService
    ) {
    }

    @Get("/:id") // GET /usuario/:id = /usuario/1
    @HttpCode(200)
    findOneById(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        // +"1" = 1
        return this.usuarioService.findOneById(+params.id);
    }

    @Delete("/:id") // DELETE /usuario/:id  = /usuario/1
    @HttpCode(200)
    delete(
        // "/:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
        return this.usuarioService.delete(+params.id);
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new AutorCreateDto();
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.numeroLibros = bodyParams.numeroLibros;
        nuevoRegistro.fechaNacimiento = bodyParams.fechaNacimiento;
        nuevoRegistro.activo = bodyParams.activo
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.usuarioService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new AutorUpdateDto();
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.numeroLibros = bodyParams.numeroLibros;
        nuevoRegistro.fechaNacimiento = bodyParams.fechaNacimiento;
        nuevoRegistro.activo = bodyParams.activo;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.usuarioService.update(
            bodyParams,
            +params.id
        );
    }

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<AutorEntity> = {
            relations: ['libros'],
            // select: ['id'], // Select
            // relations: { //  Relaciones
            //     notas: true
            // },
            where: {},
            skip: queryParams.skip ? +queryParams.skip : 0 , // 2 * 0 = 0 ; 2 * 1 = 2; 2 * 2 = 4;
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<AutorEntity>[]
        if(queryParams.nombres){
            consultaWhere.push({
                nombres: Like('%' + queryParams.nombres + '%'), // dr
                activo: queryParams.rol ? queryParams.rol : undefined // U
            })
        }
        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        return this.usuarioService.find(consulta);
    }
}