/**
 * @description 判断是否是数字
 * @param {any} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}
