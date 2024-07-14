function applyDiscount(discount: number) {
  return function (price: number) {
    return price - (price * discount) / 100;
  };
}
const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);

console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(100)); // 80

function applyTax(taxRate: number) {
  return function (price: number) {
    return price + (price * taxRate) / 100;
  };
}
const applyTenPercentTax = applyTax(10);

console.log(applyTenPercentTax(100)); // 110
console.log(applyTenPercentTax(twentyPercentOff(100))); // 88
