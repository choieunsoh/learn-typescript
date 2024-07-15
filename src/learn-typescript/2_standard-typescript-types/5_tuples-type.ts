export {};
console.log('Using tuples');

const tomScore = ['Tom', 70]; // type: (string | number)[]
console.log(tomScore);

const janeScore: [string, number] = ['Jane', 80]; // type: [string, number]
console.log(janeScore);

const mikeScore: [name: string, score: number] = ['Mike', 85]; // type: [name: string, score: number]
console.log(mikeScore);

type UserScore = [name: string, ...scores: number[]];

const timScores: UserScore = ['Tim', 70];
const juneScores: UserScore = ['June', 70, 60];
const fredScores: UserScore = ['Fred', 70, 60, 80];
console.log(timScores);
console.log(juneScores);
console.log(fredScores);

let benScores: [name: string, ...scores: number[]];
benScores = ['Ben', 50, 75, 85];
benScores = ['Ben', 50, 75, 85, 99];
console.log(benScores);
