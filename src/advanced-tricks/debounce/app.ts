function debounce(func: (...args: any[]) => void, wait: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      console.log(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function delay(wait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, wait);
  });
}

const search = debounce((query) => {
  console.log(`Searching for ${query}`);
  // Imagine an API call here
}, 300);

(async () => {
  search('foo');
  await delay(300);
  console.log('After 300ms, the function will be called with the last query');

  search('bar');
  search('baz');
  await delay(300);
  console.log('After 300ms, the function will be called with the last query');

  search('audio');
})();
