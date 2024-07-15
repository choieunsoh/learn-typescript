/* eslint-disable ts/consistent-type-definitions */
export {};
console.log('Interfaces v type aliases');

console.log('\nRepresenting primitive types');
type Name = string;
const bob: Name = 'Bob';
console.log(bob);
console.log('Winner: Type alias');

console.log('\nRepresenting arrays');
type Names = string[];
interface INames {
  [index: number]: string;
}
const heroes: Names = ['Spider-man', 'Iron Man'];
const countries: INames = ['Thailand', 'USA'];
console.log(heroes);
console.log(countries);
console.log('Winner: Type alias');

console.log('\nRepresenting tuples');
type Point = [number, number];
const point: Point = [0, 1];
console.log(point);
console.log('Winner: Type alias');

console.log('\nRepresenting functions');
type Log = (message: string) => void;
interface ILog {
  (message: string): void;
}
const log1: Log = (message: string) => console.log('Type:', message);
const log2: ILog = (message: string) => console.log('Interface:', message);
log1('Hello, World');
log2('Hello, World');
console.log('Winner: Type alias');

console.log('\nCreating union types');
type Status = 'pending' | 'working' | 'complete';
const status: Status = 'pending';
console.log(status);
console.log('Winner: Type alias');

console.log('\nRepresenting objects');
type Person = {
  name: string;
  score: number;
};
interface IPerson {
  name: string;
  score: number;
}
const alice: Person = {
  name: 'Alice',
  score: 50,
};
const cath: IPerson = {
  name: 'Cath',
  score: 60,
};
console.log(alice);
console.log(cath);
console.log('Winner: Tie');

console.log('\nComposing objects');
type Name2 = {
  firstName: string;
  lastName: string;
};
type PhoneNumber2 = {
  landline: string;
  mobile: string;
};
type Contact2 = Name2 & PhoneNumber2;
interface IName2 {
  firstName: string;
  lastName: string;
}
interface IPhoneNumber2 {
  landline: string;
  mobile: string;
}
interface IContact2 extends IName2, IPhoneNumber2 {}
type Contact3 = IName2 & IPhoneNumber2;
const fred: Contact2 = {
  firstName: 'Fred',
  lastName: 'Smith',
  landline: '1234',
  mobile: '1234',
};
const gaga: IContact2 = {
  firstName: 'Gaga',
  lastName: 'Smith',
  landline: '1234',
  mobile: '1234',
};
const jack: Contact3 = {
  firstName: 'Jack',
  lastName: 'Smith',
  landline: '1234',
  mobile: '1234',
};
console.log(fred);
console.log(gaga);
console.log(jack);

type StringActions = { type: 'loading' } | { type: 'loaded'; data: string[] };
type NumberActions = { type: 'loading' } | { type: 'loaded'; data: number[] };
type Actions = StringActions & NumberActions;
const loading: Actions = {
  type: 'loading',
};
const loaded: Actions = {
  type: 'loaded',
  data: [],
};
console.log(loading);
console.log(loaded);
console.log('Winner: Type alias');

console.log('\nAuthoring a library');
interface ButtonProps {
  text: string;
  onClick: () => void;
}
interface ButtonProps {
  id: string;
}
const props: ButtonProps = {
  id: 'btn',
  text: 'OK',
  onClick: () => {},
};
console.log(props);
console.log('Winner: Interfaces');
