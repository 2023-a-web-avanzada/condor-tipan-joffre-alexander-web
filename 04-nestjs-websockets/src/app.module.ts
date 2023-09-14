import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./eventos/eventos.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {NotaModule} from "./nota/nota.module";
import {NotaEntity} from "./nota/nota.entity";

@Module({
  imports: [EventosModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './bdd/bdd.sqlite',
    entities:[
        UsuarioEntity,NotaEntity
    ],
    synchronize: true,
    dropSchema:false,
  }),UsuarioModule, NotaModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
