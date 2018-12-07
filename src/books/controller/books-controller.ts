import { Controller, Post, Body, Put, Param, Get, Delete } from "@nestjs/common";
import { Book } from "src/common/entities/book.entity";
import { CreateBookDto } from '../dto/create-book-dto';
import { BooksService } from "../book-service";

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService ){}
    @Post()
    async create(@Body() createBookDto : CreateBookDto ){
        try{     
            return await this.booksService.create(createBookDto);
        }catch(err){
            console.log(err);
        }
    }

    @Put(':id')
    async Update(@Param('id') id, @Body() createBookDto:CreateBookDto){
        console.log('Controler '+id);
        try{
            return await this.booksService.update(id, createBookDto);
        }catch(err){
            console.log(err);
        }
    }

    @Get()
    async findAll(): Promise<Book[]> {
        try{
            return await this.booksService.findAll();
        }catch(err){
            console.log(err);
        }
    }  
    /*
    @Get(':id')
    async findOne(@Param('id') id){     
        try{   
            return await this.booksService.findOne(id);
        }catch(err){
            console.log(err);
        }
    }
    */
    
    @Delete(':id')
    async remove(@Param('id') id){
        try{
            return await this.booksService.remove(id);
        }catch(err){
            console.log(err);
        }
    }

    @Get(':id')
    async findByAuthor(@Param('id') id){     
        try{   
            return await this.booksService.findByAuthor(id);
        }catch(err){
            console.log(err);
        }
    }

}
