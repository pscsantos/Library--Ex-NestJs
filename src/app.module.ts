import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/author.module';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { AuthorsController } from './authors/controller/authors.controller';
import {TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BooksController } from './books/controller/books-controller';
import { BooksModule } from './books/book.module';

@Module({
  imports: [ TypeOrmModule.forRoot(),
      AuthorsModule,BooksModule,
      GraphQLModule.forRoot({
      typePaths: ['./**/**/*.graphql'],
      installSubscriptionHandlers: true,
      debug: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
/*
  constructor(private readonly connection: Connection){}
*/
  configure(consumer: MiddlewareConsumer){
    consumer
    //Comporta múltiplos middlewares. Separe por vírgula
    .apply(LoggerMiddleware) 
    .with('AppModule')
    .forRoutes(AuthorsController,BooksController);
    /* Excluindo middleware de rotas específicas.
    .exclude(
        { path: 'authors', method: RequestMethod.GET },
        { path: 'authors', method: RequestMethod.POST},
    )
    */
    /*
       Exemplos:
       - Por rota e metódo HTTP, no caso o middleware será executado para todos.
         mas pode ser utilizado para todos o methods
       .forRoutes({ path: 'authors', method: RequestMethod.ALL })
    */
  }
}

