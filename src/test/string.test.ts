import * as StringUtils from '../string'; // Replace with the actual file path

describe('StringUtils', () => {
  describe('isBlank', () => {
    test('should return true for blank strings', () => {
      expect(StringUtils.isBlank(undefined)).toBe(true);
      expect(StringUtils.isBlank(null)).toBe(true);
      expect(StringUtils.isBlank('   ')).toBe(true);
      expect(StringUtils.isBlank('')).toBe(true);
    });

    test('should return false for non-blank strings', () => {
      expect(StringUtils.isBlank('abc')).toBe(false);
      expect(StringUtils.isBlank('  abc  ')).toBe(false);
    });
  });

  describe('isNotBlank', () => {
    test('should return true for non-blank strings', () => {
      expect(StringUtils.isNotBlank('abc')).toBe(true);
      expect(StringUtils.isNotBlank('  abc  ')).toBe(true);
    });

    test('should return false for blank strings', () => {
      expect(StringUtils.isNotBlank(undefined)).toBe(false);
      expect(StringUtils.isNotBlank(null)).toBe(false);
      expect(StringUtils.isNotBlank('   ')).toBe(false);
      expect(StringUtils.isNotBlank('')).toBe(false);
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty strings or null', () => {
      expect(StringUtils.isEmpty(undefined)).toBe(true);
      expect(StringUtils.isEmpty(null)).toBe(true);
      expect(StringUtils.isEmpty('')).toBe(true);
    });

    test('should return false for non-empty strings', () => {
      expect(StringUtils.isEmpty('abc')).toBe(false);
      expect(StringUtils.isEmpty('  abc  ')).toBe(false);
    });
  });

  describe('isNotEmpty', () => {
    test('should return true for non-empty strings', () => {
      expect(StringUtils.isNotEmpty('abc')).toBe(true);
      expect(StringUtils.isNotEmpty('  abc  ')).toBe(true);
    });

    test('should return false for empty strings or null', () => {
      expect(StringUtils.isNotEmpty(undefined)).toBe(false);
      expect(StringUtils.isNotEmpty(null)).toBe(false);
      expect(StringUtils.isNotEmpty('')).toBe(false);
    });
  });

  describe('nullToStr', () => {
    test('should return empty string for null or empty input', () => {
      expect(StringUtils.nullToStr(null)).toBe('');
      expect(StringUtils.nullToStr('')).toBe('');
    });

    test('should return input for non-empty input', () => {
      expect(StringUtils.nullToStr('abc')).toBe('abc');
      expect(StringUtils.nullToStr('  abc  ')).toBe('  abc  ');
    });
  });

  describe('trim', () => {
    // Add tests for trim function
    // ...
  });

  describe('equals', () => {
    // Add tests for equals function
    // ...
  });

  describe('equalsIgnoreCase', () => {
    // Add tests for equalsIgnoreCase function
    // ...
  });

  describe('split', () => {
    // Add tests for split function
    // ...
  });

  describe('startWith', () => {
    // Add tests for startWith function
    // ...
  });

  describe('endWith', () => {
    // Add tests for endWith function
    // ...
  });

  describe('containsWhitespace', () => {
    // Add tests for containsWhitespace function
    // ...
  });

  describe('repeat', () => {
    // Add tests for repeat function
    // ...
  });

  describe('deleteWhitespace', () => {
    // Add tests for deleteWhitespace function
    // ...
  });

  describe('rightPad', () => {
    // Add tests for rightPad function
    // ...
  });

  describe('leftPad', () => {
    // Add tests for leftPad function
    // ...
  });

  describe('capitalize', () => {
    // Add tests for capitalize function
    // ...
  });

  describe('uncapitalize', () => {
    // Add tests for uncapitalize function
    // ...
  });

  describe('swapCase', () => {
    // Add tests for swapCase function
    // ...
  });

  describe('countMatches', () => {
    // Add tests for countMatches function
    // ...
  });

  describe('isAlpha', () => {
    // Add tests for isAlpha function
    // ...
  });

  describe('isAlphaSpace', () => {
    // Add tests for isAlphaSpace function
    // ...
  });

  describe('isAlphanumeric', () => {
    // Add tests for isAlphanumeric function
    // ...
  });

  describe('isAlphanumericSpace', () => {
    // Add tests for isAlphanumericSpace function
    // ...
  });

  describe('isNumeric', () => {
    // Add tests for isNumeric function
    // ...
  });

  describe('isDecimal', () => {
    // Add tests for isDecimal function
    // ...
  });

  describe('isPositiveDecimal', () => {
    // Add tests for isPositiveDecimal function
    // ...
  });

  describe('isInteger', () => {
    // Add tests for isInteger function
    // ...
  });

  describe('isPositiveInteger', () => {
    // Add tests for isPositiveInteger function
    // ...
  });

  describe('isNegativeInteger', () => {
    // Add tests for isNegativeInteger function
    // ...
  });

  describe('isNumericSpace', () => {
    // Add tests for isNumericSpace function
    // ...
  });

  describe('isWhitespace', () => {
    // Add tests for isWhitespace function
    // ...
  });

  describe('isAllLowerCase', () => {
    // Add tests for isAllLowerCase function
    // ...
  });

  describe('isAllUpperCase', () => {
    // Add tests for isAllUpperCase function
    // ...
  });

  describe('defaultString', () => {
    // Add tests for defaultString function
    // ...
  });

  describe('defaultIfBlank', () => {
    // Add tests for defaultIfBlank function
    // ...
  });

  describe('defaultIfEmpty', () => {
    // Add tests for defaultIfEmpty function
    // ...
  });

  describe('reverse', () => {
    // Add tests for reverse function
    // ...
  });

  describe('removeSpecialCharacter', () => {
    // Add tests for removeSpecialCharacter function
    // ...
  });

  describe('isSpecialCharacterAlphanumeric', () => {
    // Add tests for isSpecialCharacterAlphanumeric function
    // ...
  });

  describe('format', () => {
    // Add tests for format function
    // ...
  });

  describe('compressRepeatedStr', () => {
    // Add tests for compressRepeatedStr function
    // ...
  });

  describe('isChinese', () => {
    // Add tests for isChinese function
    // ...
  });

  describe('removeChinese', () => {
    // Add tests for removeChinese function
    // ...
  });

  describe('escapeMetacharacter', () => {
    // Add tests for escapeMetacharacter function
    // ...
  });

  // Add more describe blocks for other functions
});
