export {};
console.log('Creating object types');

const tomScore = {
  name: 'Tom',
  score: 70,
};
console.log(tomScore); // type: { name: string, score: number }

tomScore.score = 100;
console.log(tomScore); // { name: 'Tom', score: 100 }

// tomScore.passed = true;
// Property passed does not exist on type '{ name: string, score: number }'

const janeScore: { name: string; score: number } = {
  name: 'Jane',
  score: 77,
};
console.log(janeScore); // type: { name: string, score: number }

const bobScore: { name: string; score?: number } = {
  name: 'Bob',
};
console.log(bobScore); // type: { name: string, score?: number }
bobScore.score = 50;
console.log(bobScore); // { name: 'Bob', score: 50 }
