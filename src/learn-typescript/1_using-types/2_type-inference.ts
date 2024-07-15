console.log('Understanding type inference');

let score = 10; // type: number
score = 5;
console.log(score);

const tenScore = 10; // type: 10
console.log(tenScore);

let now = new Date(); // type: Date
now = new Date();
console.log(now);

const dateOfBirth = new Date(1990, 4, 7); // type: Date
console.log(dateOfBirth);

const first = 'Bob'; // type: Bob
console.log(first);

const last = 'Smith'; // type: Smith
const surname = last; // type: Smith
console.log(last, surname);

let surname2 = last; // type: string
surname2 = last;
console.log(surname2);

const fullName = `${first} ${last}`;
// v5.2.2+, type: Bob Smith
// early version, type: string
console.log(fullName);

let counter; // type: any
counter = 10;
counter = 11;
console.log(counter);

// return type: number
function add(a: number, b: number) {
  return a + b;
}
const ten = add(5, 5); // type: number
console.log(ten);

// return type: any
function addTen(a: any) {
  return a + 10;
}
const fourteen = addTen(4); // type: any
console.log(fourteen);

// return type: number
function addFive(a = 1) {
  return a + 5;
}
const twelve = addFive(7); // type: number
console.log(twelve);
