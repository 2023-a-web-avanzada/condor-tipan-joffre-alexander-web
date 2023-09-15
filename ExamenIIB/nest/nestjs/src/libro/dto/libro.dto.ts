import {IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class LibroDTO {
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsNumber()
    numeroPaginas:number;

    @IsNotEmpty()
    @IsDate()
    fechaPublicacion: Date;

    @IsNotEmpty()
    @IsString()
    editorial: string;

    @IsNotEmpty()
    @IsString()
    genero: string;

}