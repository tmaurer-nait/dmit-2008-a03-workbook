import { BASE_QUOTE_URL } from "./base";

const getQuote = () => {
  // Fetch the new quote data
  return fetch(BASE_QUOTE_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Resolve a promise with the new quote data
      return Promise.resolve(data);
    });
};

export { getQuote };
