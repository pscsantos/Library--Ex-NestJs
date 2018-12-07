import { Injectable } from '@nestjs/common';
import { Book } from 'src/common/entities/book.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book-dto';
import {getConnection} from "typeorm";

@Injectable()
export class BooksService{
    public get bookRepository(): Repository<Book> {
        return this._bookRepository;
    }

    constructor(
        @InjectRepository(Book)
        private _bookRepository: Repository<Book>,
    ){}

    async create(createAuthorDto: CreateBookDto): Promise<Book>{
        try{
            const author = new Book(createAuthorDto);
            return await this.bookRepository.save(author);
        }catch(err){
            console.log(err);
        }
    }

    async findAll(): Promise<Book[]>{
        try{
            return await this.bookRepository.find();
        }catch(err){
            console.log(err);
        }
    }

    async findOne(id): Promise<Book>{
        try{
            return await this.bookRepository.findOne(id);
        }catch(err){
            console.log(err);
        }
    }

    async update(id, createBookDto: CreateBookDto): Promise<Book>{
        try{
            const book = await this.bookRepository.findOne(id);
            book.title = createBookDto.title;
            book.volume = createBookDto.volume;
            book.yearOfPublication = createBookDto.yearOfPublication;
            return await this.bookRepository.save(book);
        }catch(err){
            console.log(err);
        }
    }

    async remove(id){
        try{
            const book = await this.bookRepository.findOne(id);
            return await this.bookRepository.remove(book);
        }catch(err){
            console.log(err);
        }
    }

    async findByAuthor(id){
        try{
            const books = await getRepository(Book)
                    .createQueryBuilder("book")
                    .where("book.authorId = :id", { id: id })
                    .getMany()
            return await books;
        }catch(err){
            console.log(err);
        }
    }
}
