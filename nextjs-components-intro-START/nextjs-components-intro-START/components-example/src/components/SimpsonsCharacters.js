const SIMPSON_CHARACTERS = [
  "Homer Simpson",
  "Bart Simpson",
  "Marge Simpson",
  "Mr. Burns",
  "Lisa Simpson",
  "Apu Nahasapeemapetilon",
  "Sideshow Bob",
  "Milhouse Van Houten",
  "Ned Flanders",
];

const SimpsonsCharacters = () => {
  return (
    <ul>
      {SIMPSON_CHARACTERS.map((characterName, index) => {
        return <li key={index}>{characterName}</li>;
      })}
    </ul>
  );
};

export default SimpsonsCharacters;
