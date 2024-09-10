// js here.
import { getAstronautList, getAstronautList2 } from "./api/astronaut.js";

const option1 = () => {
  // After the getAstronautList promise resolves console log the output
  getAstronautList().then((data) => {
    console.log(data);
  });
};

const option2 = async () => {
  // await return of the async getAstronautList2 function the console log the output
  let data = await getAstronautList2();
  console.log(data);
};

const main = () => {
  option1();
  option2();
};

main();
