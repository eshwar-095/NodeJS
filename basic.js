const os = require("os");
const path = require("path");
const { add, sub, mul, div } = require("./math");
const ProgressBar = require("progress");
const chalk = require("chalk");

console.log(os.type());
console.log(os.version());
console.log(__dirname);
console.log(__filename);
console.log(path.parse(__filename));

console.log(add(2, 5));
console.log(sub(2, 5));
console.log(mul(2, 5));
console.log(div(2, 5));

const measureTime = () => {
  console.time("sum()");
  add();
  console.timeEnd("sum()");
  console.time("sum()");

  console.time("sub()");
  sub();
  console.timeEnd("sub()");
  console.time("sub()");
};

measureTime();

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas ", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 1000);

console.log(chalk.green("This is node server"));
