const BASE_URL = "https://lldev.thespacedevs.com/2.2.0";

// api functions here.

// The first option for how to do this using promises
const getAstronautList = () => {
  return fetch(`${BASE_URL}/astronaut`) // gets the data from the url
    .then((response) => {
      // after we recieve the data
      return response.json(); // convert to json
    })
    .then((data) => {
      // after we convert to json
      return data; // return the data
    });
};

// The second option for how to do this using async/await
const getAstronautList2 = async () => {
  // wait for the fetch to return a response object
  let response = await fetch(`${BASE_URL}/astronaut`);

  // wait for the response to be turned into json
  let data = await response.json();

  return data;
};

export { getAstronautList, getAstronautList2 };
