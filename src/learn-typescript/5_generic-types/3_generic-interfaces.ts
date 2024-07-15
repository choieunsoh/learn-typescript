/* eslint-disable ts/consistent-type-definitions */
export {};
console.log('Creating generic interfaces');

interface Form<T> {
  values: T;
  errors?: {
    [K in keyof T]?: string;
  };
}

interface Contact {
  name: string;
  email: string;
}

const contactForm: Form<Contact> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
};
console.log(contactForm);

const errorContactForm: Form<Contact> = {
  values: {
    name: 'Bob',
    email: 'bob.com',
  },
  errors: {
    email: 'This must be a valid email address',
    // Object literal may only specify known properties, and 'age' does not exist in type '{ name?: string | undefined; email?: string | undefined; }'
    // age: 'You must enter your age',
  },
};
console.log(errorContactForm);
