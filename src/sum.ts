export function sum(...args: number[]): number {
  console.log('Hello World. HHH');
  return args.reduce((prev, total) => total + prev, 0);
}
