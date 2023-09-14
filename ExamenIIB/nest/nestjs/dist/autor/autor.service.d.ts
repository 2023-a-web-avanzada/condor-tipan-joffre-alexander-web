import { DataSource, DeepPartial, DeleteResult, FindManyOptions } from "typeorm";
import { AutorEntity } from "./autor.entity";
export declare class AutorService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    autorRepository: import("typeorm").Repository<AutorEntity>;
    find(opciones: FindManyOptions<AutorEntity>): Promise<AutorEntity[]>;
    findOneById(id: number): Promise<AutorEntity>;
    create(datosCrear: any): Promise<(DeepPartial<AutorEntity> & AutorEntity)>;
    update(datosActualizar: any, id: number): Promise<(DeepPartial<AutorEntity> & AutorEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
