export {};
console.log('Creating generic type aliases');

type Form<T> = {
  values: T;
  errors?: {
    [K in keyof T]?: string;
  };
};

type Contact = {
  name: string;
  email: string;
};

const contactForm: Form<Contact> = {
  errors: {
    email: 'This must be a valid email address',
  },
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
};

console.log(contactForm);
