export {};
console.log('Extending classes');

class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  log() {
    console.log(this.name, this.price);
  }
}

class Table extends Product {
  constructor(
    public name: string,
    public price: number,
    public legs: number,
  ) {
    super(name, price);
  }

  log() {
    console.log(this.name, this.price, this.legs);
  }
}

const table = new Table('Table', 500, 4);
table.log();

const chair = new Product('Chair', 200);
chair.log();
