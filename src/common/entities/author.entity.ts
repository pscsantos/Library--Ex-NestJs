import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CreateAuthorDto } from '../../authors/dto/create-author.dto';

@Entity()
export class Author {
    
    public constructor(data?: CreateAuthorDto){
        if(data){
            this.name = data.name;
            this.age  = data.age;
        }
    }    

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name?: String;

    @Column('int')
    age?: number;
}
