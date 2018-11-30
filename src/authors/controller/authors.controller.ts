import { Controller, Get, Req, Post, HttpCode, Param, Header, Body, Query, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorsService } from '../provider/authors.service';
import { Author } from '../interface/author.interface';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService ){}

    @Post('create')
    async create(@Body() createAuthorDto : CreateAuthorDto ){
        this.authorsService.create(createAuthorDto);
    }

    @Get()
    async findAll(): Promise<Author[]> {
        return this.authorsService.findAll();
    }  

    @Get(':id')
    findOne(@Param('id') id){
        console.log(id);
        return `This action returns a ${id} author`;
    }

    @Put(':id')
    Update(@Param('id') id, @Body() createAuthorDto : CreateAuthorDto){
        return `This action updates a ${id} author`;
    }
    
    @Delete(':id')
    remove(@Param(':id') id){
        return `This action removes a ${id} author`;
    }

    /*
    @Get(':id')
    find(@Param() params){
        return `This action returns a ${params.id} author`;
    }
    */
}
