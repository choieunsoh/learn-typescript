type Curry<T extends (...args: any[]) => any> =
  Parameters<T> extends [first: infer F, second: infer S, ...rest: infer R]
    ? (input: F) => Curry<(input: S, ...rest: R) => ReturnType<T>>
    : T;

function curry<T extends (...args: any[]) => any>(fn: T, argCount = fn.length): Curry<T> {
  return ((...args: unknown[]) => {
    if (args.length >= argCount) {
      return fn(...args);
    }
    return curry(fn.bind(null, ...args), argCount - args.length);
  }) as Curry<T>;
}

function example(a: number, b: string, c: boolean, d: 3 | 5): { foo: string } {
  console.log(a, b, c, d);
  return { foo: 'bar' };
}

const curriedExample = curry(example);
const a = curriedExample(10);
const b = a('foo');
const c = b(true);
const d = c(5);

console.log(d);
