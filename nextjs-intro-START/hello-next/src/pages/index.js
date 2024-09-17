import Hello from "../components/Hello";

/**
 * Uppercases a string
 *
 * @param {string} value
 * @returns the uppercase value passed in
 */
const toUpper = (value) => {
  return value.toUpperCase();
};

export default function Home() {
  return (
    <>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <p>This is my {toUpper("website")}</p>
    </>
  );
}
