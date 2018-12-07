import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/common/entities/book.entity';
import { BooksService } from './book-service';
import { BooksController } from './controller/books-controller';
import { BooksResolver } from './book-resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BooksController],
    providers: [BooksService, BooksResolver],
    exports: [BooksService,BooksModule]
})
export class BooksModule {}
