import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../common/entities/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Repository } from 'typeorm';
@Injectable()
export class AuthorsService {
    public get authorRepository(): Repository<Author> {
        return this._authorRepository;
    }

    constructor(
        @InjectRepository(Author)
        private _authorRepository: Repository<Author>,
    ){}

    async create(createAuthorDto: CreateAuthorDto): Promise<Author>{
        try{
            const author = new Author(createAuthorDto);
            return await this.authorRepository.save(author);
        }catch(err){
            console.log(err);
        }
    }

    async findAll(): Promise<Author[]>{
        try{
            console.log(this.authorRepository.find());
            return await this.authorRepository.find();
        }catch(err){
            console.log(err);
        }
    }

    async findOne(id): Promise<Author>{
        try{
            console.log(this.authorRepository.findOne(id));
            return await this.authorRepository.findOne(id);
        }catch(err){
            console.log(err);
        }
    }

    async update(id, createAuthorDto: CreateAuthorDto): Promise<Author>{
        try{
            console.log('Service'+id);
            const author = await this.authorRepository.findOne(id);
            author.name = createAuthorDto.name;
            author.age = createAuthorDto.age;
            return await this.authorRepository.save(author);
        }catch(err){
            console.log(err);
        }
    }

    async remove(id){
        try{
            const author = await this.authorRepository.findOne(id);
            return await this.authorRepository.remove(author);
        }catch(err){
            console.log(err);
        }
    }

}
