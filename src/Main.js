import { useState, useEffect } from "react";
import playbutton from "./assets/images/icon-play.svg";

const Main = ({ search }) => {
  const [word, setWord] = useState("keyboard");
  const [phonetics, setPhonetics] = useState("/ˈkiːbɔːd/");
  const [nounDefinitions, setNounDefinitions] = useState([]);
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].word);
        setPhonetics(data[0].phonetic);
        const nounDefs = data[0].meanings
          .filter((meaning) => meaning.partOfSpeech === "noun")
          .flatMap((noun) => noun.definitions);
        setNounDefinitions(nounDefs);
        const syn = data[0].meanings
          .filter((meaning) => meaning.partOfSpeech === "noun")
          .flatMap((noun) => noun.synonyms);
        setSynonyms(syn);
      });
  }, [search]);

  return (
    <main>
      <div className="heading">
        <div className="meaning">
          <h1>{word}</h1>
          <p>{phonetics}</p>
        </div>
        <img src={playbutton}></img>
      </div>
      <div className="noun">
        <h2>Noun</h2>
        <p>Meaning</p>
        <ul>
          {nounDefinitions.map((definition, index) => (
            <li key={index}>{definition.definition}</li>
          ))}
        </ul>
        <p>
          Synonyms
          <span className="syn"> {synonyms[0]}</span>
        </p>
      </div>
    </main>
  );
};

export default Main;
