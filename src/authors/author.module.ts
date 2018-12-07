import { Module } from '@nestjs/common';
import { AuthorsController } from './controller/authors.controller';
import { AuthorsService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../common/entities/author.entity';
import { AuthorsResolver } from './author.resolver';
import { BooksModule } from 'src/books/book.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Author]),BooksModule
    ],
    controllers: [AuthorsController],
    providers: [AuthorsService, AuthorsResolver],
    exports: [AuthorsService]
})
export class AuthorsModule {}
