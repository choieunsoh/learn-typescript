export {};
console.log('Understanding the any type');

let something;
something = 'Bob';
console.log(something); // No type errors occur!
something = 33;
console.log(something); // No type errors occur!
something = false;
console.log(something); // No type errors occur!
something = new Date(2019, 5, 8);
console.log(something); // No type errors occur!

const formValues: { [field: string]: any } = {
  firstName: 'Bob',
  surname: 'Smith',
  age: 30,
};
console.log(formValues);
