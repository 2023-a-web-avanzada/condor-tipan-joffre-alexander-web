import { DeleteResult, UpdateResult } from "typeorm";
import { LibroEntity } from "./libro.entity";
import { LibroService } from "./libro.service";
import { LibroDTO } from "./dto/libro.dto";
export declare class LibroController {
    private readonly libroService;
    constructor(libroService: LibroService);
    create(libro: LibroDTO): Promise<LibroDTO & LibroEntity>;
    find(autorId: number): Promise<LibroEntity[]>;
    findById(id: number): Promise<LibroEntity>;
    update(id: number, libro: LibroDTO): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
