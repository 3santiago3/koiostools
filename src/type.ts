/**
 * @description 判断是否是数字
 * @param {any} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * @description 判断是否是对象
 * @param {any} value
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
