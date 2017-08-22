const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process01() {
    try {
      console.log("Process 01 started");
      await wait(100);
      throw new Error("Process 01 Failed");
      console.time("Process 01 ended");
      await wait(5000);
      console.timeEnd("Process 01 ended");    
      return 'process01-value';
    } catch(error) {
      console.error(error);
    }
  },

  async process02() {
    try {
      console.log("Process 02 started\n");
      console.time("Process 02 ended");
      await wait(3000);
      console.timeEnd("Process 02 ended");
      return 'process02-value';
    } catch(error) {
      console.error(error);
    }
  }
}
