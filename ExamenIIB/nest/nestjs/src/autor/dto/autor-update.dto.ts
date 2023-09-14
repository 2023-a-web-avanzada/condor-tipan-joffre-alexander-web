import {IsBoolean, IsDate, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class AutorUpdateDto {
    @IsOptional()
    @IsString()
    nombres: string;

    @IsOptional()
    @IsNumber()
    numeroLibros:number;

    @IsOptional()
    @IsDate()
    fechaNacimiento: Date

    @IsOptional()
    @IsBoolean()
    activo: boolean
}