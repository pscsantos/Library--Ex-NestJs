import { Module, Global } from '@nestjs/common';
import { AuthorsController } from './controller/authors.controller';
import { AuthorsService } from './provider/authors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entity/author.entity';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Author])],
    controllers: [AuthorsController],
    providers: [AuthorsService],
    exports: [AuthorsService]
})
export class AuthorsModule {
}
