import { isNumber } from '../type';

describe('isNumber', () => {
  it('should return true if the value is a number', () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
    expect(isNumber(-100)).toBe(true);
  });

  it('should return false if the value is not a number', () => {
    expect(isNumber('hello')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber('3.14')).toBe(false);
  });
});
