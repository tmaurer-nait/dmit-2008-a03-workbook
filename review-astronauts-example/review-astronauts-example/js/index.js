// js here.
import { getAstronautList, getAstronautList2 } from "./api/astronaut.js";
import { renderAstronautListItem } from "./dom/astronaut.js";

// const option1 = () => {
//   // After the getAstronautList promise resolves console log the output
//   getAstronautList().then((data) => {
//     console.log(data);
//   });
// };

const option2 = async () => {
  // await return of the async getAstronautList2 function the console log the output
  let data = await getAstronautList2();
  console.log(data);

  // query the dom for the astronaut list <ul> element
  let astronautListElement = document.querySelector(".astronaut-list");
  console.log(astronautListElement);

  // get the array of astronautData objects from data.results
  // Then iterate over the array and call renderAstronautListItem for each astronautData object
  data.results.map((astronautData) => {
    renderAstronautListItem(astronautData, astronautListElement);
  });
};

const main = () => {
  // option1();
  option2();
};

main();
