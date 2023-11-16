export function sum(...args: number[]): number {
  console.log('Hello');
  return args.reduce((prev, total) => total + prev, 0);
}
