import {IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class LibroUpdateDto {
    @IsOptional()
    @IsString()
    titulo: string;

    @IsOptional()
    @IsNumber()
    numeroPaginas:number;

    @IsOptional()
    @IsDate()
    fechaPublicacion: Date

    @IsOptional()
    @IsString()
    editorial: string;

    @IsOptional()
    @IsString()
    genero: string;
}