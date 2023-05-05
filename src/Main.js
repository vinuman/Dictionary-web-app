import { useState, useEffect } from "react";
import playbutton from "./assets/images/icon-play.svg";

const Main = ({ search }) => {
  const [word, setWord] = useState("keyboard");
  const [phonetics, setPhonetics] = useState("/ˈkiːbɔːd/");
  const [nounDefinitions, setNounDefinitions] = useState("");

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].word);
        setPhonetics(data[0].phonetic);
        setNounDefinitions(data[0].phonetics[0].text);
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
        <p>{nounDefinitions}</p>
      </div>
    </main>
  );
};

export default Main;
