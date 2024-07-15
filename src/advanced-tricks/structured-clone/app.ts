const obj = {
  a: 1,
  b: { c: 2 },
  date: new Date(),
  arr: [1, 2, 3],
  nestedArr: [{ d: 4 }],
};
const clonedObj = structuredClone(obj);

console.log(clonedObj);
// { a: 1, b: { c: 2 }, date: 2024-07-15T03:42:21, arr: [1, 2, 3], nestedArr: [{ d: 4 }] }
console.log(clonedObj === obj); // false
console.log(clonedObj.b === obj.b); // false
console.log(clonedObj.date === obj.date); // false
console.log(clonedObj.arr === obj.arr); // false
console.log(clonedObj.nestedArr[0] === obj.nestedArr[0]); // false
