export {};
console.log('Creating type aliases');

type BasicScore = {
  name: string;
  score: number;
};
const tomScore: BasicScore = { name: 'Tom', score: 70 };
const bobScore: BasicScore = { name: 'Bob', score: 80 };
const janeScore: BasicScore = { name: 'Jane', score: 90 };
console.log(tomScore);
console.log(bobScore);
console.log(janeScore);

type FirstName = string;
type PersonScore = number;
type TypeScore = {
  name: FirstName;
  score: PersonScore;
};
const aliceScore: TypeScore = { name: 'Alice', score: 95 };
console.log(aliceScore);

type Log = (message: string) => void;
const log: Log = (message: string) => {
  console.log(message);
};
log('Using type aliases for functions');

type AdvancedScore = {
  name: string;
  score: number;
  passed?: boolean;
  log: Log;
};
const logScore: Log = (name: string) => {
  console.log(`name: ${name}`);
};
const tomScore1: AdvancedScore = {
  name: 'Tom',
  score: 70,
  log: logScore,
};
const bobScore1: AdvancedScore = {
  name: 'Bob',
  score: 80,
  log: logScore,
};
const janeScore1: AdvancedScore = {
  name: 'Jane',
  score: 90,
  passed: true,
  log: logScore,
};
console.log(tomScore1);
console.log(bobScore1);
console.log(janeScore1);
janeScore1.log(janeScore1.name);
