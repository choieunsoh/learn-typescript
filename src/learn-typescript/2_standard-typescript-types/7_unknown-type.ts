export {};
console.log('Using the unknown type');

/*
function add(a: unknown, b: unknown) {
  return a + b;
}
/// Type checking does occur on the unknown type, unlike with the any type.
*/

function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 0;
}
console.log(add(1, 2)); // 3
console.log(add('one', 'two')); // 0

async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

function isPerson(person: any): person is Person {
  if (person !== null && 'id' in person && 'name' in person)
    return true;
  return false;
}

type Person = {
  id: string;
  name: string;
};

async function getPerson(id: number): Promise<Person | null> {
  const person = await getData(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (isPerson(person)) {
    return person;
  }
  return null;
}

getPerson(1).then(console.log);
getPerson(0).then(console.log);
