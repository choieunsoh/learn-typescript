export {};
console.log('Creating generic classes');

class List<T> {
  constructor(private items: T[] = []) {}

  push(value: T) {
    this.items.push(value);
  }

  print() {
    console.log(this.items);
  }
}

const list = new List<number>([1, 2, 3]);
list.push(4);
list.print();
