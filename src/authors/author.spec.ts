import { Author } from '../common/entities/author.entity';

describe('Author', () => {
  it('should be defined', () => {
    expect(new Author()).toBeTruthy();
  });
});
