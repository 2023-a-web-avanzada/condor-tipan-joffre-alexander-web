import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, DeleteResult, FindManyOptions} from "typeorm";
import {AutorEntity} from "./autor.entity";

@Injectable()
export class AutorService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public autorRepository = this.datasource.getRepository(
        AutorEntity
    );
    find(
        opciones: FindManyOptions<AutorEntity>
    ): Promise<AutorEntity[]> {
        return this.autorRepository.find(opciones)
    }
    findOneById(id: number): Promise<AutorEntity> {
        return this.autorRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }



    create(
        datosCrear: any
    ): Promise<(DeepPartial<AutorEntity> & AutorEntity)> {
        return this.autorRepository.save(datosCrear);
    }

    update(
        datosActualizar: any,
        id: number
    ): Promise<(DeepPartial<AutorEntity> & AutorEntity)> {
        return this.autorRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number): Promise<DeleteResult> {
        return this.autorRepository.delete(id);
    }
}