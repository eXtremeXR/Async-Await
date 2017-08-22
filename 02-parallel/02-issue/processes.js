const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process01() {
    console.log("Process 01 started");
    throw new Error("Process 01 Failed");
    console.time("Process 01 ended");
    await wait(5000);
    console.timeEnd("Process 01 ended");    
    return 'process01-value';
  },

  async process02() {
    console.log("Process 02 started\n");
    console.time("Process 02 ended");
    await wait(3000);
    console.timeEnd("Process 02 ended");
    return 'process02-value';
  }
}
