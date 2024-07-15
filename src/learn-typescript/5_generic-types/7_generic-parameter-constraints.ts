export {};
console.log('Implementing generic parameter constraints');

type Logable = {
  log: () => void;
};
function logItems<T extends Logable>(items: T[]): void {
  items.forEach(item => item.log());
}

const heading = {
  name: 'Heading',
  props: { text: 'Chapter 1' },
  log: () => console.log('Chapter 1 heading'),
};
const button = {
  name: 'Button',
  props: { text: 'Save' },
  log: () => console.log('Save button'),
};
logItems([heading, button]);

type Form<T> = {
  values: T;
};
function getFieldValue<T, K extends keyof T>(form: Form<T>, fieldName: K) {
  return form.values[fieldName];
}

const contactForm = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
};
console.log(getFieldValue(contactForm, 'name'));
// Argument of type '"phone"' is not assignable to parameter of type '"name" | "email"'
// console.log(getFieldValue(contactForm, 'phone'));
console.log(getFieldValue(contactForm, 'email'));
