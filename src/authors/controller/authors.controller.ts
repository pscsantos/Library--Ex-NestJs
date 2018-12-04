import { Controller, Get, Req, Post, HttpCode, Param, Header, Body, Query, Put, Delete, HttpException, HttpStatus, UseFilters, ForbiddenException } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorsService } from '../provider/authors.service';
//import { Author } from '../interface/author.interface';
import { Author } from '../entity/author.entity';
import { AllExceptionFilter } from 'src/common/exceptions/all-exception.filter';
import { identity } from 'rxjs';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService ){}

    @Post()
    async create(@Body() createAuthorDto : CreateAuthorDto ){     
       return await this.authorsService.create(createAuthorDto);
        //throw new ForbiddenException();
    }

    @Put(':id')
    async Update(@Param('id') id, @Body() createAuthorDto:CreateAuthorDto){
        return await this.authorsService.update(id, createAuthorDto);
    }

    @Get()
    async findAll(): Promise<Author[]> {
        return await this.authorsService.findAll();
    }  

    @Get(':id')
    async findOne(@Param('id') id){        
        return await this.authorsService.findOne(id);
    }
    
    @Delete(':id')
    async remove(@Param('id') id){
        return await this.authorsService.delete(id);
    }
}
