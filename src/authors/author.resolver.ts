import { AuthorsService } from "./author.service";
import { Resolver, Query, Args, Mutation, ResolveProperty, Parent } from "@nestjs/graphql";
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from '../common/entities/author.entity';
import { AllExceptionFilter } from "src/common/exceptions/all-exception.filter";
import { BooksService } from "src/books/book-service";

@Resolver('Author')
//@UseFilters( new AllExceptionFilter)
export class AuthorsResolver {
    constructor(
        private readonly authorsService: AuthorsService,
        private readonly booksService: BooksService,
    ){}

    @Query('author')
    async author(@Args('id') id: number) {
        return await this.authorsService.findOne(id);
    }

    @Query('authors')
    async authors() {
        return await this.authorsService.findAll();
    }

    @Mutation('createAuthor')
    async createAuthor(@Args('createAuthorInput') args: CreateAuthorDto): Promise<Author>{
        return await this.authorsService.create(args);
    }

    @ResolveProperty('books')
    async getBooks(@Parent() { id }){
           return await this.booksService.findByAuthor(id);
    }
}
