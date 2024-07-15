export {};
console.log('Creating intersection types');

type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  home: string;
  mobile: string;
};

type Contact = Name & PhoneNumber;

const fred: Contact = {
  firstName: 'Fred',
  lastName: 'Smith',
  home: '021234567',
  mobile: '0891234567',
};
console.log(fred);

type Email = {
  emailAddress: string;
};

type ContactV2 = Contact & Email;
const bob: ContactV2 = {
  firstName: 'Bob',
  lastName: 'Smith',
  home: '021234567',
  mobile: '0891234567',
  emailAddress: 'bob@gmail.com',
};
console.log(bob);

type BaseElement = {
  name: string;
  kind: 'text' | 'number' | 'email';
};
type TextInput = {
  kind: 'text';
};
type Field = BaseElement & TextInput;
const age: Field = {
  name: 'Age',
  // kind: 'number', // Type 'number' is not assignable to type 'text'
  kind: 'text',
};
console.log(age);

type DoItA = {
  doIt: (a: number) => number;
};
type DoItB = {
  doIt: (a: number, b: number) => number;
};
type DoIt = DoItA & DoItB;
const doIt: DoIt = {
  doIt: (a: number) => a,
};
console.log(doIt.doIt(5));
