import {IsBoolean, IsDate, IsIn, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class AutorDTO {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsDate()
    fechaNacimiento: Date

    @IsNotEmpty()
    @IsBoolean()
    activo: boolean

}