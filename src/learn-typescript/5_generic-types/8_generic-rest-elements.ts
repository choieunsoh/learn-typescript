export {};
console.log('Using generic rest elements with tuple types');

console.log('\nUsing generic rest element types');
type NameAndThings<T extends unknown[]> = [name: string, ...things: T];

const bobScore: NameAndThings<number[]> = ['Bob', 60, 70, 80];
console.log(bobScore);

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
const billGrades: NameAndThings<Grade[]> = ['Bill', 'A', 'B', 'F'];
console.log(billGrades);

console.log('\nUsing generic rest element types in functions');
function logThings<T extends unknown[]>(name: string, ...things: T) {
  console.log(things);
}
logThings('Bob', 4, 9, 3); // things: number[]
logThings('Bob', 4, '9', 3); // things: [number, string, number]
