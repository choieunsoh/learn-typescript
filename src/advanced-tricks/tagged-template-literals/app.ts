export function sanitize(strings: TemplateStringsArray, ...values: unknown[]): string {
  return strings.reduce((result, string, i) => {
    let value = values[i - 1];
    if (typeof value === 'string') {
      value = value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
    return result + (value ?? '') + string;
  });
}

const userInput = '<script>alert("xss")</script>';
const message = sanitize`User input: ${userInput}`;
console.log(message); // User input: &lt;script&gt;alert("xss")&lt;/script&gt;

export function uppercase(strings: TemplateStringsArray, ...args: string[]) {
  let str = '';
  strings.forEach((string, i) => {
    if (typeof args[i] === 'string' && args[i]) {
      str += string + args[i].toUpperCase();
    }
  });
  return str;
}

const name = 'Snickers';
const age = '100';
const sentence = uppercase`My dog's name is ${name} and he is ${age} years old`;
console.log(sentence);

const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
