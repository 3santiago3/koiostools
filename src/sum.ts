export function sum(...args: number[]): number {
  console.log('Hello World.');
  return args.reduce((prev, total) => total + prev, 0);
}
