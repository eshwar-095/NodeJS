const os = require("os");
const path = require("path");
const { add, sub, mul, div } = require("./math");

console.log(os.type());
console.log(os.version());
console.log(__dirname);
console.log(__filename);
console.log(path.parse(__filename));

console.log(add(2, 5));
console.log(sub(2, 5));
console.log(mul(2, 5));
console.log(div(2, 5));
