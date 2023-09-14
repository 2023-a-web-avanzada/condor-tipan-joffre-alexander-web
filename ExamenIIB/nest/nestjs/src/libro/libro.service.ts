import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, DeepPartial, DeleteResult, FindManyOptions} from "typeorm";
import {LibroEntity} from "./libro.entity";

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

    find(
        autorId: number
    ): Promise<LibroEntity[]> {
        return this.libroRepository.find(
            {
                where:{
                    autor: autorId
                }
            }
        )
    }
    findOneById(id: number): Promise<LibroEntity> {
        return this.libroRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }



    create(
        datosCrear: any
    ): Promise<(DeepPartial<LibroEntity> & LibroEntity)> {
        return this.libroRepository.save(datosCrear);
    }

    update(
        datosActualizar: any,
        id: number
    ): Promise<(DeepPartial<LibroEntity> & LibroEntity)> {
        return this.libroRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number): Promise<DeleteResult> {
        return this.libroRepository.delete(id);
    }
}