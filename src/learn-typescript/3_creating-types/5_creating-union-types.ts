export {};
console.log('Creating union types');

type A_or_B_or_C = 'A' | 'B' | 'C';
const a: A_or_B_or_C = 'A';
console.log(a);

let age: number | null;
age = null;
console.log(age); // null
age = 45;
console.log(age); // 45

type Age = number | null | undefined;
const tomAge: Age = 39;
console.log(tomAge);
const nullAge: Age = null;
console.log(nullAge);
const undefinedAge: Age = undefined;
console.log(undefinedAge);

type Fruit = 'Banana' | 'Apple' | 'Pear';
const banana: Fruit = 'Banana';
const apple: Fruit = 'Apple';
console.log(banana);
console.log(apple);

type Action = { type: 'loading' } | { type: 'loaded'; data: { name: string } };
const loadingAction: Action = { type: 'loading' };
console.log(loadingAction);
const loadedAction: Action = { type: 'loaded', data: { name: 'Alice' } };
console.log(loadedAction);
