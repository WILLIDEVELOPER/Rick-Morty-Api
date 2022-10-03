import { Navbar } from "./Components/Navbar";
import { useState, useEffect } from "react";
import RMCards from "./Components/RMCards";
import Pages from "./Components/Pages";

function App() {
  const [Character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});
  const _url = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info);
      });
  };

  const onPrevious = () => {
    getCharacters(info.prev);
  };

  const onNext = () => {
    getCharacters(info.next);
  };

  useEffect(() => {
    getCharacters(_url);
  }, []);
  return (
    <main className="bg-slate-800 min-h-screen">
      <Navbar title="RICK AND MORTY API" />
      <div className="mt-5">
        <Pages
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <RMCards characters={Character} />
        <Pages
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </main>
  );
}

export default App;
