const util = require("util");
const wait = util.promisify(setTimeout);

function getRandBetween(a, b) {
  return Math.floor(Math.random() * b) + a; 
}

class PowerPlant {
  constructor(id) {
    this.id = id;
  }

  async turnOn() {
    console.log(`Turning ON Power Plant ${this.id}!`);
    console.time(`Power Plant ${this.id} turned on`);
    await wait(getRandBetween(1,5) * 200);
    console.timeEnd(`Power Plant ${this.id} turned on`);  
    console.log();
  }

  async turnOff() {
    console.log(`Turning OFF Power Plant ${this.id}!`);
    console.time(`Power Plant ${this.id} turned off`);
    await wait(getRandBetween(1,3) * 200);
    console.timeEnd(`Power Plant ${this.id} turned off`);  
    console.log();
  }
}

module.exports = PowerPlant;
