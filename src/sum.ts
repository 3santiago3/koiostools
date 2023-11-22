/**
 * 计算一组数字的总和
 *
 * @param args 一组数字
 * @returns 数字的总和
 */
export function sum(...args: number[]): number {
  console.log('...');
  return args.reduce((prev, total) => total + prev, 0);
}
