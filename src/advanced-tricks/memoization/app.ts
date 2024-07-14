export function memoize(func: (...args: any[]) => any) {
  const cache = new Map<string, any>();
  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      const result = func.apply(this, args);
      cache.set(key, result);
    }
    return cache.get(key);
  };
}

const fibonacci = memoize((n: number): bigint => {
  if (n <= 1)
    return BigInt(n);
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10));
console.log(fibonacci(40));
console.log(fibonacci(100));
console.log(fibonacci(120));
