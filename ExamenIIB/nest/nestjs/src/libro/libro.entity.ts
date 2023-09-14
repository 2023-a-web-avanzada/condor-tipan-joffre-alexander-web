import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {AutorEntity} from "../autor/autor.entity";
@Entity('libro') // nombre tabla en la bdd
export class LibroEntity {
// id autogenerado
    @PrimaryGeneratedColumn()
    id: number;

    /*
    * titulo
    numeroPaginas
    fechaPublicacion
    editorial
    genero
    * */
    @Column({
        name: 'titulo', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    titulo: string; // nombre campo

    @Column({
        name: 'numero_paginas', // nombre campo bdd
        type: 'int', // tipo campo bdd
        nullable: false, // Si es nullable
    })
    numeroPaginas: string; // nombre campo

    @Column({
        name: 'fecha_publicacion', // nombre campo bdd
        type: 'date', /// tipo campo bdd
        nullable: false, // Si es nullable
    })
    fechaPublicacion: Date;

    @Column({
        name: 'editorial', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud campo bdd
        nullable: false, // Si es nullable
    })
    editorial: string; // nombre campo

    @Column({
        name: 'genero', // nombre campo bdd
        type: 'varchar', // tipo campo bdd
        length: 60, // longitud bdd
        nullable: false, // Si es nullable
    })
    genero: string; // nombre campo

    @Column({
        name: 'autor',
        type: 'int',
        nullable: false,
    })
    autor: number
}