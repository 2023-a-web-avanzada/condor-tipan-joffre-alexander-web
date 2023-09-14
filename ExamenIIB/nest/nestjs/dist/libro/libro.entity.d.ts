import { AutorEntity } from "../autor/autor.entity";
export declare class LibroEntity {
    id: number;
    titulo: string;
    numeroPaginas: string;
    fechaPublicacion: Date;
    editorial: string;
    genero: string;
    autor: AutorEntity;
}
