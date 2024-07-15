export {};
console.log('Using arrays');

const items: number[] = [];
console.log(items);

const nums = [1, 2, 3]; // type: number[]
console.log(nums);

const names = ['Alice', 'Bob', 'Cath', 'Dave']; // type: string[]
console.log(names);

function logScores(firstName: string, ...scores: number[]) {
  console.log(firstName, scores);
}
logScores('Ben', 50, 75, 85); // outputs Ben and [50, 75, 85]
// logScores('Mike', 90, 65, '65'); // Argument of type 'string' is not assignable to parameter of type 'number'
