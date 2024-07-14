const apiResponse = { first_name: 'John', user_age: 30, address: { city: 'New York', zip: '10001' } };
const {
  first_name: firstName,
  user_age: age,
  address: { city: hometown, zip: postalCode },
} = apiResponse;

console.log(firstName); // John
console.log(age); // 30
console.log(hometown); // New York
console.log(postalCode); // 10001
