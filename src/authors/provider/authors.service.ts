import { Injectable } from '@nestjs/common';
import { Author } from '../interface/author.interface';

@Injectable()
export class AuthorsService {
    private readonly authors: Author[] = [];

    create(author: Author){
        this.authors.push(author);
    }

    findAll(): Author[]{
        return this.authors;
    }
    
}
