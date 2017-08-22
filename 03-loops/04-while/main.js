const now = require("performance-now")
const { secretAlgorithm } = require("./processes");

const NUMBER_OF_RUNS = 10;

// Suppose we're benchmarking our algorithm
// We want to run it multiple time and figure out average running time
async function main() {
  try {  
    let retries = 0;
    let totalTime = 0;

    while(retries < NUMBER_OF_RUNS) {
      const start = now();      
      await secretAlgorithm();
      const end = now();
      totalTime += (end-start);

      retries++;
    }

    console.log();

    console.log("Total Time: ", totalTime);
    console.log("Number of retries: ", retries);
    console.log("Average Running Time: ", (totalTime/retries).toFixed(3));
  } catch(error) {
    console.error("error", error);
  }
}

main();

