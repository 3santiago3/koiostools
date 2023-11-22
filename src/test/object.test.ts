import { isEmptyObject } from '../object';

describe('isEmptyObject: ', () => {
  it(`{} should return true`, () => {
    expect(isEmptyObject({})).toBeTruthy();
  });

  it(`{foo: 'bar'} should return false`, () => {
    expect(isEmptyObject({ foo: 'bar' })).toBeFalsy();
  });
});
