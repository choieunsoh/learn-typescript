// Basic logging
console.log('Simple log');
console.error('This is an error');
console.warn('This is a warning');

// Logging tabular data
const users = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'San Francisco' },
];
console.table(users);

// Grouping logs
console.group('User Details');
console.log('User 1: John');
console.log('User 2: Jane');
console.groupEnd();

// Timing code execution
console.time('Timer');
for (let i = 0; i < 1000000; i++) {
  // Some heavy computation
}
console.timeEnd('Timer');
