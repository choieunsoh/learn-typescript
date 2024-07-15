export {};
console.log('Spreading generic tuple parameters');

function merge(names: string[], scores: number[]) {
  return [...names, ...scores];
}
const scores = merge(['Bill', 'Jane'], [8, 9]);
console.log(scores); // type: (string | number)[]

function merge2<Names extends string[], Scores extends number[]>(names: Names, scores: Scores) {
  return [...names, ...scores];
}
const scores2 = merge2(['Bill', 'Jane'], [8, 9]);
console.log(scores2); // type: (string | number)[]

function merge3<Names extends string[], Scores extends number[]>(names: [...Names], scores: [...Scores]) {
  return [...names, ...scores];
}
const scores3 = merge3(['Bill', 'Jane'], [8, 9]);
console.log(scores3); // type: ('Bill' | 'Jane' | 8 | 9)[]

function merge4<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores],
): [...Names, ...Scores] {
  return [...names, ...scores];
}
const scores4 = merge4(['Bill', 'Jane'], [8, 9]);
console.log(scores4); // type: ['Bill', 'Jane', 8, 9]
