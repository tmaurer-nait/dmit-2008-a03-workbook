import { BASE_URL } from "./base";

const getReviews = () => {
  // returning the fetch will make our "getReviews"
  // function a promise, because it is going over the
  // network it needs to be asynchronous.
  return fetch(`${BASE_URL}/reviews/`)
    .then((response) => {
      // Convert the response to json object
      return response.json();
    })
    .then((data) => {
      // using Promise.resolve here will pass the data we have
      // fetched here as the returnedData passed when we use the function.
      // getReviews().then((returnedData)=> { // when used in other places.})
      return Promise.resolve(data);
    });
};

const postReview = ({ title, comment, rating }) => {
  return fetch(`${BASE_URL}/reviews/`, {
    // The method has to be a POST
    method: "POST",
    // The headers for the request
    headers: {
      "Content-Type": "application/json",
    },
    // The body for the request, stringified so that the request can be sent
    body: JSON.stringify({
      title,
      comment,
      rating,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return Promise.resolve(data);
    });
};

export { getReviews, postReview };
