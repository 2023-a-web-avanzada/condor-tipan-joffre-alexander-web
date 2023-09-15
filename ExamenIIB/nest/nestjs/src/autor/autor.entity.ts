import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
@Entity('autor') // nombre tabla en la bdd
export class AutorEntity {
// id autogenerado
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nombre', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    nombre: string; // nombre campo

    @Column({
        name: 'fecha_nacimiento', // nombre campo bdd
        type: 'date', /// tipo campo bdd
        nullable: false, // Si es nullable
    })
    fechaNacimiento: Date;

    @Column({
        name: 'activo', // nombre campo bdd
        type: 'boolean', /// tipo campo bdd
        nullable: false, // Si es nullable
    })
    activo: boolean;

}