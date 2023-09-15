import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeleteResult, UpdateResult} from "typeorm";
import {LibroEntity} from "./libro.entity";
import {LibroDTO} from "./dto/libro.dto";

@Injectable()
export class LibroService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }
    public libroRepository = this.datasource.getRepository(
        LibroEntity
    );

    create(datosCrear: any): Promise<LibroDTO & LibroEntity> {
        return this.libroRepository.save(datosCrear);
    }

    find(autorId: number): Promise<LibroEntity[]> {
        return this.libroRepository.find({
            where: {
                autor: autorId,
            }
        });
    }

    findOneById(id: number): Promise<LibroEntity> {
        return this.libroRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    update(id: number, libro: LibroDTO): Promise<UpdateResult> {
        return this.libroRepository.update(id, libro);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.libroRepository.delete(id);
    }
}