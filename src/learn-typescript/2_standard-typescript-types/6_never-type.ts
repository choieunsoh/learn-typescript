export {};
console.log('Using the never type');
/*
function keepLogging(message: string) {
  while (true) {
    console.log(message);
  }
}
/// The return type is never
keepLogging('never return any values');

/// void is when the function returns without a value.
/// In this example, the function never returns.
*/

type Status = 'Pending' | 'Working' | 'Complete';

function neverReached(never: never) {
  console.log(never);
}

function doSomeAction(status: Status) {
  switch (status) {
    case 'Pending':
      // some code
      console.log('Pending');
      break;
    case 'Working':
      // some code
      console.log('Working');
      break;
    case 'Complete':
      // some code
      console.log('Complete');
      break;
    default:
      neverReached(status);
      break;
  }
}
doSomeAction('Pending');

/*
The never type is used to represent a type of value that will never occur.
It is useful to explicitly flag areas of code that shouldn’t be reached.
It is also useful when creating conditional types.
*/
