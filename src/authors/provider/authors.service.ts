import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../entity/author.entity';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { Repository, getConnection } from 'typeorm';
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
        const author = new Author(createAuthorDto);
        return await this.authorRepository.save(author);
    }

    async findAll(): Promise<Author[]>{
        return await this.authorRepository.find();
    }

    async findOne(id): Promise<Author>{
        return await this.authorRepository.findOne(id);
    }

    async update(id, createAuthorDto: CreateAuthorDto): Promise<Author>{
        const author = await this.authorRepository.findOne(id);
        author.name = createAuthorDto.name;
        author.age = createAuthorDto.age;
        return await this.authorRepository.save(author);
    }

    async delete(id){
        const author = await this.authorRepository.findOne(id);
        return await this.authorRepository.remove(author);
    }

}
