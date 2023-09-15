import { DataSource, DeleteResult, UpdateResult } from "typeorm";
import { LibroEntity } from "./libro.entity";
import { LibroDTO } from "./dto/libro.dto";
export declare class LibroService {
    datasource: DataSource;
    constructor(datasource: DataSource);
    libroRepository: import("typeorm").Repository<LibroEntity>;
    create(datosCrear: any): Promise<LibroDTO & LibroEntity>;
    find(autorId: number): Promise<LibroEntity[]>;
    findOneById(id: number): Promise<LibroEntity>;
    update(id: number, libro: LibroDTO): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
