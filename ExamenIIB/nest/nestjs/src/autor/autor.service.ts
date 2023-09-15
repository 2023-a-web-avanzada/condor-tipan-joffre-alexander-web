import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, DeleteResult, FindManyOptions, UpdateResult} from "typeorm";
import {AutorEntity} from "./autor.entity";
import {AutorDTO} from "./dto/autor.dto";

@Injectable()
export class AutorService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public autorRepository = this.datasource.getRepository(AutorEntity);
    find(opciones: FindManyOptions<AutorEntity>): Promise<AutorEntity[]> {
        return this.autorRepository.find(opciones)
    }
    findOneById(id: number): Promise<AutorEntity> {
        return this.autorRepository.findOne({
            where: {
                id: id
            },
        })
    }
    create(datosCrear: AutorDTO): Promise<AutorEntity & AutorDTO> {
        return this.autorRepository.save(datosCrear);
    }

    update(id: number, datosActualizar: AutorDTO ): Promise<UpdateResult> {
        return this.autorRepository.update(id,datosActualizar);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.autorRepository.delete(id);
    }
}