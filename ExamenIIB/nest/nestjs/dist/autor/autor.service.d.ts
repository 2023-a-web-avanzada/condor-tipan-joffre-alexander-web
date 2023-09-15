import { DataSource, DeleteResult, FindManyOptions, UpdateResult } from "typeorm";
import { AutorEntity } from "./autor.entity";
import { AutorDTO } from "./dto/autor.dto";
export declare class AutorService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    autorRepository: import("typeorm").Repository<AutorEntity>;
    find(opciones: FindManyOptions<AutorEntity>): Promise<AutorEntity[]>;
    findOneById(id: number): Promise<AutorEntity>;
    create(datosCrear: AutorDTO): Promise<AutorEntity & AutorDTO>;
    update(id: number, datosActualizar: AutorDTO): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
