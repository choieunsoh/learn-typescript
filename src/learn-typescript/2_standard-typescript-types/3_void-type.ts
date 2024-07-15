export {};
console.log('Understanding and using the void type');

function logMessage(message: string) {
  console.log(message);
}
logMessage(`The function has a return type of void.`);

// The void type represents a function's return type when it doesn't return any data.
function logMessage2(message: string): void {
  console.log(message);
}
logMessage2(`The void type represents a function's return type when it doesn't return any data.`);

let whatCanIHold: void;
// whatCanIHold = null; // Type 'null' is not assignable to type 'void'
whatCanIHold = undefined;
whatCanIHold = undefined;
// whatCanIHold = 'something'; // Type 'string' is not assignable to type 'void'
console.log(whatCanIHold);
