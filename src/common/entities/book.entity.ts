import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CreateBookDto } from '../../books/dto/create-book-dto';
import { Author } from "./author.entity";

@Entity()
export class Book {
    
    public constructor(data?: CreateBookDto){
        if(data){
            this.title = data.title;
            this.volume  = data.volume;
            this.yearOfPublication  = data.yearOfPublication;
        }
    }    

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    title?: String;

    @Column('int')
    volume?: number;

    @Column('int')
    yearOfPublication?: number;

    @ManyToOne(type => Author)
    @JoinColumn({ name: "authorId" })
    author: Author;
}
