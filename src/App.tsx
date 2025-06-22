import { useEffect, useState } from "react";
import "./index.css";
import Form from "./components/form";
import MemoryCard from "./components/memory-card";
import getDataSlice from "./helpers/random-emojies";
import getShuffledArray from "./helpers/shuffle-array";

// set data type for an emoji
type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};

type SelectedCard = {
  name: string;
  index: number;
};

function App() {
  // use state to set game status and emoji data
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<EmojiData[]>([]);
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<SelectedCard[]>([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        setMatchedCards((prev) => [...prev, ...selectedCards]);
      }
    }
  }, [selectedCards]);

  // function that starts the game
  async function startGame(e: React.FormEvent<HTMLButtonElement>) {
    // prevent page from reloading
    e.preventDefault();

    try {
      // api call to get data
      const resp = await fetch(
        `https://emojihub.yurace.pro/api/all/category/animals-and-nature`
      );
      // if not return of data, set error
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      // stores data as an array of emojies in json format
      const data: EmojiData[] = await resp.json();
      // call to store dataSlice is an array of random emojies chosen by a call of random numbers
      const dataSlice = getDataSlice(data);
      // call to store emojiesArray as an array of the dataSlice shuffled
      const emojiesArray = getShuffledArray(dataSlice);

      setEmojisData(emojiesArray);
      setIsGameOn(true);
    } catch (error) {
      console.error(error);
    }
    setIsGameOn(true);
  }

  function turnCard(name: string, index: number) {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );

    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index },
      ]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  }

  console.log(emojisData);
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && (
        <MemoryCard
          handleClick={turnCard}
          data={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
    </main>
  );
}

export default App;
