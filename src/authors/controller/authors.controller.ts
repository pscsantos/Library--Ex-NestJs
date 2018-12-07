import { Controller, Get, Req, Post, HttpCode, Param, Header, Body, Query, Put, Delete, HttpException, HttpStatus, UseFilters, ForbiddenException } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorsService } from '../author.service';
//import { Author } from '../interface/author.interface';
import { Author } from '../../common/entities/author.entity';
import { AllExceptionFilter } from 'src/common/exceptions/all-exception.filter';


@Controller('authors')
//@UseFilters( new AllExceptionFilter)
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService ){}

    @Post()
    async create(@Body() createAuthorDto : CreateAuthorDto ){   
        try{  
            return await this.authorsService.create(createAuthorDto);
        }catch(err){
            console.log(err);
        }
    }

    @Put(':id')
    async Update(@Param('id') id, @Body() createAuthorDto:CreateAuthorDto){
        try{
            console.log('Controler '+id);
            return await this.authorsService.update(id, createAuthorDto);
        }catch(err){
            console.log(err);
        }
    }

    @Get()
    async findAll(): Promise<Author[]> {
        try{
            return await this.authorsService.findAll();
        }catch(err){
            console.log(err);
        }
    }  

    @Get(':id')
    async findOne(@Param('id') id){   
        try{     
            return await this.authorsService.findOne(id);
        }catch(err){
            console.log(err);
        }
    }
    
    @Delete(':id')
    async remove(@Param('id') id){
        try{
            return await this.authorsService.remove(id);
        }catch(err){
            console.log(err);
        }
    }
}
