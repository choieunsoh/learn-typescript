export {};
console.log('Implementing generic parameter defaults');

type Component<T1 = string, T2 = Record<string, unknown>> = {
  name: T1;
  props: T2;
  log: () => void;
};

const button: Component = {
  name: 'Button',
  props: {
    text: 'Save',
  },
  log: () => console.log('Save button'),
};
button.log();

const alice: Component = {
  name: 'Alice',
  props: {
    age: 25,
  },
  log() {
    console.log(`name: ${this.name}, age: ${this.props.age}`);
  },
};
alice.log();

const bob: Component<string, number> = {
  name: 'Bob',
  props: 25,
  log() {
    console.log(`name: ${this.name}, age: ${this.props}`);
  },
};
bob.log();
