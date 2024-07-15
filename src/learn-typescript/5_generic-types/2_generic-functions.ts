export {};
console.log('Creating generic functions');

function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

const firstPerson = firstOrNull<string>(['Rod', 'Jane', 'Fred']);
const firstNum = firstOrNull<number>([1, 2, 3]);
console.log(firstPerson, firstNum);

const first = firstOrNull([1, 2, 3]);
console.log(first);
