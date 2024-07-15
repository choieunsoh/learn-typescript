export {};
console.log('Creating enums');

enum Level {
  High,
  Medium,
  Low,
}
const high = Level.High;
const medium = Level.Medium;
const low = Level.Low;
console.log(high, medium, low); // 0 1 2

const level2: Level = 2;
// const level5: Level = 5; // Type '5' is not assignable to type 'Level'
console.log(level2); // 2

enum LevelText {
  High = 'H',
  Medium = 'M',
  Low = 'L',
}
const highText = LevelText.High;
const mediumText = LevelText.Medium;
const lowText = LevelText.Low;
console.log(highText, mediumText, lowText); // H M L

// const levelVH: LevelText = 'VH' // Type 'VH' is not assignable to type 'LevelText'
// const levelH: LevelText = 'H'; // Type 'H' is not assignable to type 'LevelText'
