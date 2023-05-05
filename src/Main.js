import { useState, useEffect } from "react";
import playbutton from "./assets/images/icon-play.svg";

const Main = ({ search }) => {
  const [word, setWord] = useState("keyboard");
  const [phonetics, setPhonetics] = useState("/ˈkiːbɔːd/");

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].word);
        setPhonetics(data[0].phonetic);
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
    </main>
  );
};

export default Main;
