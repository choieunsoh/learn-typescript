function throttle(func: (...args: any[]) => void, interval: number) {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function delay(wait: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve('done'), wait);
  });
}

const search1 = throttle((query: string) => {
  console.log(`Search by ${query}`);
}, 300);

(async () => {
  search1('foo');
  await delay(300);
  search1('bar');
  search1('baz');
  await delay(300);
  search1('alice');
  search1('bob');
})();
