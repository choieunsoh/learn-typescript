type User = {
  name: string;
  age: number;
};

const user: User = {
  name: 'John',
  age: 30,
};

const handler: ProxyHandler<User> = {
  get: (target, prop: keyof User) => {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set: (target, prop: keyof User, value: any) => {
    if (prop === 'age' && typeof value === 'number') {
      console.log(`Setting ${prop} to ${value}`);
      target[prop] = value;
    }
    if (prop === 'name' && typeof value === 'string') {
      console.log(`Setting ${prop} to ${value}`);
      target[prop] = value;
    }
    return true;
  },
};

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.name); // Getting name, John
proxyUser.age = 35; // Setting age to 35
// proxyUser.age = '35'; // Throws TypeError
