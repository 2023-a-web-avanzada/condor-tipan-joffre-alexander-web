import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AutorEntity} from "./autor/autor.entity";
import {LibroEntity} from "./libro/libro.entity";
import {AutorModule} from "./autor/autor.module";
import {LibroModule} from "./libro/libro.module";


@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/bddExamen.sqlite',
      entities:[
        AutorEntity,LibroEntity
      ],
      synchronize: true,
      dropSchema:false,
    }),AutorModule, LibroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
