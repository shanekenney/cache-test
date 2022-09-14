import { identity } from './identity';

describe('identity', () => {
  it('should return its input', () => {
    expect(identity('hello')).toEqual('hello');
  });
});
