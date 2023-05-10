#!/usr/bin/env node
const promptmaker = require('promptmaker');
const input = process.argv.slice(2);

const options = input.reduce(
  (acc, item) => {
    const [key, value] = item.split('=');

    if (value) {
      acc.options[key] = value;
    } else {
      acc.subjectParts.push(item);
    }

    return acc;
  },
  { options: {}, subjectParts: [] }
);

if (options.subjectParts.length > 0) {
  options.options.subject = options.subjectParts.join(' ');
  delete options.subjectParts;
}

// console.log(options)
const ret = promptmaker(options)
console.log(ret)


