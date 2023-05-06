import { useState, useEffect } from "react";
import playbutton from "./assets/images/icon-play.svg";
import emoji from "./assets/images/istockphoto-1342022699-170667a.jpg";

const Main = ({ search }) => {
  const [data, setData] = useState(null);
  const [word, setWord] = useState("keyboard");
  const [phonetics, setPhonetics] = useState("/ˈkiːbɔːd/");
  const [nounDefinitions, setNounDefinitions] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [verbDefinitions, setverbDefinitions] = useState([]);
  const [notFound, setNotFound] = useState(false);

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
        const verbDefs = data[0].meanings
          .filter((meaning) => meaning.partOfSpeech === "verb")
          .flatMap((verb) => verb.definitions);
        setverbDefinitions(verbDefs);
        setData(data);
        setNotFound(false);
      })
      .catch((error) => {
        setNotFound(true);
      });
  }, [search]);

  const playAudio = () => {
    let audioUrl;
    const phoneticWithAudio = data[0].phonetics.find(
      (phonetic) => phonetic.audio
    );

    if (phoneticWithAudio) {
      audioUrl = phoneticWithAudio.audio;
    }
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <main>
      {notFound ? (
        <div className="not-found">
          <img
            style={{
              width: "6.4rem",
              height: "6.4rem",
              borderRadius: "50%",
            }}
            src={emoji}
            alt="sademoji"
          ></img>
          <h2>No definitions found</h2>
          <p>
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      ) : (
        <div>
          <div className="heading">
            <div className="meaning">
              <h1 className="title">{word}</h1>
              <p>{phonetics}</p>
            </div>
            <img onClick={playAudio} src={playbutton}></img>
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
          <div className="noun">
            <h2>Verb</h2>
            <p>Meaning</p>
            <ul>
              {verbDefinitions.map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
