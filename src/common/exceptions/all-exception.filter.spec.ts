import { AllExceptionFilter } from './http-exception.filter';

describe('HttpException.FilterFilter', () => {
  it('should be defined', () => {
    expect(new AllExceptionFilter()).toBeTruthy();
  });
});
