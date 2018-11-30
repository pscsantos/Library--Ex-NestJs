import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { DatabaseModuleModule } from './database-module/database-module.module';

@Module({
  imports: [AuthorsModule, DatabaseModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
