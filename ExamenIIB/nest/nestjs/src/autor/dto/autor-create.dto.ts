import {IsBoolean, IsDate, IsIn, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class AutorCreateDto {
    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsNumber()
    numeroLibros:number;

    @IsNotEmpty()
    @IsDate()
    fechaNacimiento: Date

    @IsNotEmpty()
    @IsBoolean()
    activo: boolean

}