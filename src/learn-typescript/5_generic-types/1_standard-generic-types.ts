/* eslint-disable ts/array-type */
export {};
console.log('Using some standard generic types');

const nums: Set<number> = new Set<number>([1, 2, 3, 4]);
console.log(nums);

type Coordinate = [x: number, y: number];
const points: Array<Coordinate> = [
  [0, 0],
  [1, 1],
  [2, 2],
];
console.log(points);

type User = {
  firstName: string;
  lastName: string;
  age: number;
};
type Users = Record<string, User>;
const users: Users = {
  Alice: { firstName: 'Alice', lastName: 'Smith', age: 24 },
  Bob: { firstName: 'Bob', lastName: 'Smith', age: 45 },
  Jane: { firstName: 'Jane', lastName: 'Smith', age: 39 },
};
console.log(users);
console.log(users.Alice);
