export {};
console.log('Using the Date type');

const dateOfBirth = new Date(1990, 4, 7);
console.log(dateOfBirth);
console.log(dateOfBirth.getDate());
// console.log(dateOfBirth.addDays(2)); // Property 'addDays' does not exist on type 'Date'

function calculateRenewal(startDate: Date): Date {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);
  return result;
}
console.log(calculateRenewal(new Date()));
