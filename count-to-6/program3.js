let input = process.argv.slice(2);

let result = input.map(x=>x.charAt(0)).reduce((x, y) => x + y, "");

console.log(`[${input}] becomes \"${result}\"`)