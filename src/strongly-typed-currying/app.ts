type Curry<F extends (...args: any[]) => any> = <T extends any[]>(
  ...args: T
) => T extends Parameters<F> ? ReturnType<F> : Curry<(...args: Exclude<Parameters<F>, T>[]) => ReturnType<F>>;

function curry<F extends (...args: any[]) => any>(fn: F): Curry<F> {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs: any[]) => curried(...args, ...moreArgs);
  } as Curry<F>;
}

function example(a: number, b: string, c: boolean, d: 3 | 5): { foo: string } {
  console.log(a, b, c, d);
  return { foo: 'bar' };
}

const curriedExample = curry(example);

// Now you can use curriedExample with varying number of arguments
const result1 = curriedExample(10, 'foo', true, 5);
const result2 = curriedExample(10)('foo')(true)(5);
const result3 = curriedExample(10, 'foo')(true, 5);
const result4 = curriedExample(10, 'foo', true)(5);
const result5 = curriedExample(10, 'foo')(true)(5);

console.log(result1, result2, result3, result4, result5);
