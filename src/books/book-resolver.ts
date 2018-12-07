import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { BooksService } from "./book-service";
import { CreateBookDto } from "./dto/create-book-dto";

@Resolver('Book')
export class BooksResolver{

    constructor(
        private readonly booksService: BooksService,
    ){} 

    @Query('book')
    async book(@Args('id') id: number ){
        return await this.booksService.findOne(id);
    }

    @Query('books')
    async books(){
        return await this.booksService.findAll();
    }

    @Mutation('createBook')
    async createBook(@Args('createBookInput') args: CreateBookDto){
        return this.booksService.create(args);
    }

}