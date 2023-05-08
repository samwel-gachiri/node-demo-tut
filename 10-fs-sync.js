const { readFileSync, writeFileSync } = require("fs");
console.log('start')
console.log('Reading first file')
const first = readFileSync("./content/first.txt", "utf-8");
console.log('Finished read task')
console.log('Reading second file')
const second = readFileSync("./content/second.txt", "utf8");
console.log('Finished read task')

console.log('writing   to  file')
writeFileSync(
  "./content/result-sync.txt",
  `The results are : ${first}, ${second}`,
  { flag: "a" }
);
console.log('finished writing to file')
