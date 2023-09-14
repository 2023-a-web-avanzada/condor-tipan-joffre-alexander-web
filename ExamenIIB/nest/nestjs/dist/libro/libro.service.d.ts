import { DataSource, DeepPartial, DeleteResult, FindManyOptions } from "typeorm";
import { LibroEntity } from "./libro.entity";
export declare class LibroService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    libroRepository: import("typeorm").Repository<LibroEntity>;
    find(opciones: FindManyOptions<LibroEntity>): Promise<LibroEntity[]>;
    findOneById(id: number): Promise<LibroEntity>;
    create(datosCrear: any): Promise<(DeepPartial<LibroEntity> & LibroEntity)>;
    update(datosActualizar: any, id: number): Promise<(DeepPartial<LibroEntity> & LibroEntity)>;
    delete(id: number): Promise<DeleteResult>;
}
