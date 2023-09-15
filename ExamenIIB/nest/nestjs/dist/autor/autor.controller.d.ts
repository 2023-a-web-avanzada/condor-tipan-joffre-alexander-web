import { DeleteResult, UpdateResult } from "typeorm";
import { AutorService } from "./autor.service";
import { AutorDTO } from "./dto/autor.dto";
import { AutorEntity } from "./autor.entity";
export declare class AutorController {
    private readonly autorService;
    constructor(autorService: AutorService);
    create(autor: AutorDTO): Promise<AutorDTO & AutorEntity>;
    find(): Promise<AutorEntity[]>;
    findOneById(id: number): Promise<AutorEntity>;
    update(id: number, autor: AutorDTO): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
