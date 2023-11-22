/**
 * 字符串是否为空白 空白的定义如下： <br>
 * 1、为null <br>
 * 2、为不可见字符（如空格）<br>
 * 3、""<br>
 *
 * @param str 被检测的字符串
 * @return boolean 是否为空
 */
export const isBlank = function (str: string | null | undefined): boolean {
  return str === undefined || str == null || trim(str) === '';
};

/**
 * 字符串是否为非空白 空白的定义如下： <br>
 * 1、不为null <br>
 * 2、不为不可见字符（如空格）<br>
 * 3、不为""<br>
 *
 * @param str 被检测的字符串
 * @return boolean 是否为非空
 */
export const isNotBlank = function (str: string | null | undefined): boolean {
  return !isBlank(str);
};

/**
 * 字符串是否为空，空的定义如下:<br>
 * 1、为null <br>
 * 2、为""<br>
 *
 * @param str 被检测的字符串
 * @return boolean 是否为空
 */
export const isEmpty = function (str: string | null | undefined): boolean {
  return str == null || str === '';
};

/**
 * 字符串是否为非空白 空白的定义如下： <br>
 * 1、不为null <br>
 * 2、不为""<br>
 *
 * @param str 被检测的字符串
 * @return boolean 是否为非空
 */
export const isNotEmpty = function (str: string | null | undefined): boolean {
  return !isEmpty(str);
};

/**
 * 空对象转字符串
 *
 * @param str 被检查的字符串
 * @return string 原字符串或者空串
 */
export const nullToStr = function (str: string | null | undefined): string {
  if (isEmpty(str)) {
    return '';
  }
  return str as string;
};

/**
 * 空格截取
 *
 * @param str 截取的字符串
 * @return string
 */
export const trim = function (str: string | null | undefined): string {
  if (str == null) {
    return '';
  }
  return str.toString().replace(/(^\s*)|(\s*$)|\r|\n/g, '');
};

/**
 * 比较两个字符串（大小写敏感）
 *
 * @param str 字符串
 * @param that 比较的字符串
 * @return boolean
 */
export const equals = function (str: string, that: string): boolean {
  return str === that;
};

/**
 * 比较两个字符串（大小写不敏感）
 *
 * @param str 字符串
 * @param that 比较的字符串
 * @return boolean
 */
export const equalsIgnoreCase = function (str: string, that: string): boolean {
  return String(str).toUpperCase() === String(that).toUpperCase();
};

/**
 * 将字符串按指定字符分割
 *
 * @param str 字符串
 * @param sep 比较的字符串
 * @param maxLen 最大长度
 * @return string[] 分割后的数组
 */
export const split = function (
  str: string,
  sep: string,
  maxLen?: number
): string[] | null {
  if (isEmpty(str)) {
    return null;
  }
  const value = String(str).split(sep);
  return maxLen ? value.slice(0, maxLen - 1) : value;
};

/**
 * 判断字符串是否是以start开头
 *
 * @param str 字符串
 * @param start 开始的字符串
 * @return boolean
 */
export const startWith = function (str: string, start: string): boolean {
  const reg = new RegExp('^' + start);
  return reg.test(str);
};

/**
 * 判断字符串是否是以end结尾
 *
 * @param str 字符串
 * @param end 结尾的字符串
 * @return boolean
 */
export const endWith = function (str: string, end: string): boolean {
  const reg = new RegExp(end + '$');
  return reg.test(str);
};

// 生成指定个数的字符
export const repeat = function (ch: string, repeatTimes: number): string {
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += ch;
  }
  return result;
};

/**
 * 去除字符串两端的空白字符
 *
 * @param input 字符串
 * @return string
 */
export const deleteWhitespace = function (input: string): string {
  return input.replace(/\s+/g, '');
};

export const rightPad = function (
  input: string,
  size: number,
  padStr: string
): string {
  return input + repeat(padStr, size);
};

export const leftPad = function (
  input: string,
  size: number,
  padStr: string
): string {
  return repeat(padStr, size) + input;
};

// 首小写字母转大写
export const capitalize = function (input: string): string {
  if (input == null || input.length === 0) {
    return input;
  }
  return input.replace(/^[a-z]/, function (matchStr) {
    return matchStr.toLocaleUpperCase();
  });
};

// 首大写字母转小写
export const uncapitalize = function (input: string): string {
  if (input == null || input.length === 0) {
    return input;
  }
  return input.replace(/^[A-Z]/, function (matchStr) {
    return matchStr.toLocaleLowerCase();
  });
};

// 大写转小写，小写转大写
export const swapCase = function (input: string): string {
  return input.replace(/[a-z]/gi, function (matchStr) {
    if (matchStr >= 'A' && matchStr <= 'Z') {
      return matchStr.toLocaleLowerCase();
    } else if (matchStr >= 'a' && matchStr <= 'z') {
      return matchStr.toLocaleUpperCase();
    } else {
      return matchStr;
    }
  });
};

// 统计含有的子字符串的个数
export const countMatches = function (input: string, sub: string): number {
  if (isEmpty(input) || isEmpty(sub)) {
    return 0;
  }
  let count = 0;
  let index = 0;
  while ((index = input.indexOf(sub, index)) !== -1) {
    index += sub.length;
    count++;
  }
  return count;
};

// 只包含字母
export const isAlpha = function (input: string): boolean {
  return /^[a-z]+$/i.test(input);
};

// 只包含字母、空格
export const isAlphaSpace = function (input: string): boolean {
  return /^[a-z\s]*$/i.test(input);
};

// 只包含字母、数字
export const isAlphanumeric = function (input: string): boolean {
  return /^[a-z0-9]+$/i.test(input);
};

// 只包含字母、数字和空格
export const isAlphanumericSpace = function (input: string): boolean {
  return /^[a-z0-9\s]*$/i.test(input);
};

// 数字
export const isNumeric = function (input: string): boolean {
  return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
};

// 小数
export const isDecimal = function (input: string): boolean {
  return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
};

// 正小数
export const isPositiveDecimal = function (input: string): boolean {
  return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
};

// 整数
export const isInteger = function (input: string): boolean {
  return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
};

// 正整数
export const isPositiveInteger = function (input: string): boolean {
  return /^\+?(?:0|[1-9]\d*)$/.test(input);
};

// 负整数
export const isNegativeInteger = function (input: string): boolean {
  return /^-?(?:0|[1-9]\d*)$/.test(input);
};

// 只包含数字和空格
export const isNumericSpace = function (input: string): boolean {
  return /^[\d\s]*$/.test(input);
};

export const isWhitespace = function (input: string): boolean {
  return /^\s*$/.test(input);
};

export const isAllLowerCase = function (input: string): boolean {
  return /^[a-z]+$/.test(input);
};

export const isAllUpperCase = function (input: string): boolean {
  return /^[A-Z]+$/.test(input);
};

export const defaultString = function (
  input: string | null,
  defaultStr: string
): string {
  return input == null ? defaultStr : input;
};

export const defaultIfBlank = function (
  input: string,
  defaultStr: string
): string {
  return isBlank(input) ? defaultStr : input;
};

export const defaultIfEmpty = function (
  input: string,
  defaultStr: string
): string {
  return isEmpty(input) ? defaultStr : input;
};

// 字符串反转
export const reverse = function (input: string): string {
  if (isBlank(input)) {
    return input;
  }
  return input.split('').reverse().join('');
};

// 删掉特殊字符(英文状态下)
export const removeSpecialCharacter = function (input: string): string {
  return input.replace(/[!-/:-@[-`{-~]/g, '');
};

// 只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
export const isSpecialCharacterAlphanumeric = function (
  input: string
): boolean {
  return /^[!-~]+$/.test(input);
};

/**
 * @param {String} message
 * @param {Array} arr
 * 消息格式化
 */
export const format = function (message: string, arr: string[]): string {
  return message.replace(/{(\d+)}/g, function (matchStr, group1) {
    return arr[parseInt(group1, 10)];
  });
};
/**
 * 把连续出现多次的字母字符串进行压缩。如输入:aaabbbbcccccd 输出:3a4b5cd
 * @param {String} input
 * @param {Boolean} ignoreCase : true or false
 */
export const compressRepeatedStr = function (
  input: string,
  ignoreCase: boolean
): string {
  const pattern = new RegExp('([a-z])\\1+', ignoreCase ? 'ig' : 'g');
  return input.replace(pattern, function (matchStr, group1) {
    return matchStr.length + group1;
  });
};
// 中文校验
export const isChinese = function (input: string): boolean {
  return /^[\u4E00-\u9FA5]+$/.test(input);
};
// 去掉中文字符
export const removeChinese = function (input: string): string {
  return input.replace(/[\u4E00-\u9FA5]+/gm, '');
};
/**
 * 转义元字符
 *
 * @param input 输入字符串
 * @return string 转义后的字符串
 */
export const escapeMetacharacter = function (input: string): string {
  const metacharacter = '^$()*+.[]|\\-?{}|';
  if (metacharacter.indexOf(input) >= 0) {
    input = '\\' + input;
  }
  return input;
};
