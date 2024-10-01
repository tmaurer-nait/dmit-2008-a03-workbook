import styles from "../styles/SimpsonsCharacters.module.scss";

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

export default function SimpsonsCharacters() {
  return (
    <ul className={styles.list}>
      {SIMPSON_CHARACTERS.map((characterName, index) => {
        let isEven = index % 2 === 0;
        return (
          <li
            className={`${styles.spacing} ${isEven ? styles["list-item"] : ""}`}
            key={index}
          >
            {characterName}
          </li>
        );
      })}
    </ul>
  );
}
