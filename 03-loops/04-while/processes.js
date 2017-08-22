const util = require("util");
const wait = util.promisify(setTimeout);

function getRandBetween(a, b) {
  return Math.floor(Math.random() * b) + a; 
}

module.exports = {
  async secretAlgorithm() {
    console.time("secretAlgorithm");
    await wait(getRandBetween(1,7) * 100);
    console.timeEnd("secretAlgorithm");  
  }
}
