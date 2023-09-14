import { LibroEntity } from "../libro/libro.entity";
export declare class AutorEntity {
    id: number;
    nombres: string;
    numeroLibros: number;
    fechaNacimiento: Date;
    activo: boolean;
    libros: LibroEntity[];
}
