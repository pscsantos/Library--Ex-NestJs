import { Module, Global } from '@nestjs/common';
import { AuthorsController } from './controller/authors.controller';
import { AuthorsService } from './provider/authors.service';

@Global()
@Module({
    controllers: [AuthorsController],
    providers: [AuthorsService],
    exports: [AuthorsService]
})
export class AuthorsModule {}
