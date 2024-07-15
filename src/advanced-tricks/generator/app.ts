type SupportTypes = Map<string, unknown> | Record<string, unknown> | object;

function isObject(obj: SupportTypes): obj is Record<string, unknown> {
  return !(obj instanceof Map) && typeof obj === 'object' && obj !== null;
}

export function* objectEntries<T extends SupportTypes>(obj: T): Generator<[string, unknown]> {
  if (obj instanceof Map) {
    for (const [key, value] of obj) {
      yield [key, value];
      if (isObject(value)) {
        yield * objectEntries(value);
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      yield [key, value];
      if (isObject(value)) {
        yield * objectEntries(value);
      }
    }
  }
}

const map = new Map<string, unknown>();
map.set('Alice', 'Girl');
map.set('Bob', 'Boy');
map.set('Cath', 'Unknown');

for (const [key, value] of objectEntries(map)) {
  console.log(`${key} = ${value}`);
}

const mapGenerator = objectEntries(map);
console.log(mapGenerator.next());
console.log(mapGenerator.next());
console.log(mapGenerator.next());
console.log(mapGenerator.next());

const record: Record<string, unknown> = {};
record['A+'] = '90-100';
record.A = '80-89';
record.B = '70-79';
record.C = '60-69';
record.D = '50-59';
record.F = '0-49';

for (const [key, value] of objectEntries(record)) {
  console.log(`${key} = ${value}`);
}

const recordGenerator = objectEntries(record);
console.log(recordGenerator.next());
console.log(recordGenerator.next());
console.log(recordGenerator.next());
console.log(recordGenerator.next());
console.log(recordGenerator.next());
console.log(recordGenerator.next());

const obj = {
  name: 'Bob',
  address: {
    city: 'Bangkok',
    country: 'Thailand',
  },
  contact: {
    email: 'bob@gmail.com',
    tel: '0891234567',
  },
  age: 50,
  job: 'Programmer',
};

for (const [key, value] of objectEntries(obj)) {
  console.log(`${key} = ${value}`);
}

const objGenerator = objectEntries(obj);
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
