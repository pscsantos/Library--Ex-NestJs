import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsController } from './authors.controller';

describe('Authors Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthorsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AuthorsController = module.get<AuthorsController>(AuthorsController);
    expect(controller).toBeDefined();
  });
});
