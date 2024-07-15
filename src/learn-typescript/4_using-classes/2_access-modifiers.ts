export {};
console.log('Using access modifiers');

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  copy(name: string) {
    const copiedProduct = new Product(name, this.price);
    return copiedProduct;
  }

  static equal(product1: Product, product2: Product) {
    return product1.name === product2.name && product1.price === product2.price;
  }
}

const table1 = new Product('Table1', 300);
const table2 = table1.copy('Table2');
console.log(Product.equal(table1, table2));

table1.price = 100;
console.log(Product.equal(table1, table2));

console.log('\nConstructor assignment');
class Drink {
  constructor(
    private name: string,
    private price: number,
  ) {}

  print() {
    console.log(this);
  }
}

const coke = new Drink('Coke', 7);
coke.print();
