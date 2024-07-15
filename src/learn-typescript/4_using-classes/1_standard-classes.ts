export {};
console.log('Working with standard JavaScript classes');

class Product1 {
  name?: string;
  price?: number;
}

const milk = new Product1();
milk.name = 'Cocoa';
milk.price = 20;

console.log('\nImplementing methods');

class Product2 {
  name?: string;
  price?: number;
  copy() {
    return structuredClone(this);
  }
}

const coffee = new Product2();
coffee.name = 'Mocha';
coffee.price = 35;
const tea = coffee.copy();
console.log('Equality', coffee === tea);
tea.name = 'Green tea';
tea.price = 25;
console.log(tea);

console.log('\nImplementing constructors');

class Product3 {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const snack = new Product3('Lays', 32);
console.log(snack);

console.log('\nProperty inference from constructors');

class Product4 {
  name;
  price;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const lays = new Product4('Lays', 32);
console.log(lays);

console.log('\nImplementing static classes');

class Product5 {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static equal(a: Product5, b: Product5) {
    return a.name === b.name && a.price === b.price;
  }
}

const cookie = new Product5('Cookie', 12);
console.log(cookie);
const cake = new Product5('Cake', 32);
console.log(cake);
console.log('Equality', Product5.equal(cookie, cake));
