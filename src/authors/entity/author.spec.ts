import { Author } from './author.entity';

describe('Author', () => {
  it('should be defined', () => {
    expect(new Author()).toBeTruthy();
  });
});
