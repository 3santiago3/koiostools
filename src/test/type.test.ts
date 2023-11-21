import { isNumber, isObject } from '../type';

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

describe('isObject', () => {
  it('should return true for an empty object', () => {
    expect(isObject({})).toBe(true);
  });

  it('should return true for a non-empty object', () => {
    expect(isObject({ key: 'value' })).toBe(true);
  });

  it('should return false for a null value', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for a undefined value', () => {
    expect(isObject(undefined)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isObject('')).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isObject(0)).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isObject([])).toBe(false);
  });
});
