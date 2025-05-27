import { useMemo, useState } from "react";
import "./App.css";
import Form from "./components/form";
import MemoryCard from "./components/memory-card";
import getRandomNumber from "./helpers/random-number";

type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<EmojiData[]>([]);

  const indexNumbers = useMemo(() => getRandomNumber(), []);

  async function startGame(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      const resp = await fetch(
        `https://emojihub.yurace.pro/api/all/category/animals-and-nature`
      );
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      const data = await resp.json();
      const dataSample = data.slice(0, 21);

      const filteredData = dataSample.filter((_: EmojiData, i: number) =>
        indexNumbers.includes(i)
      );

      setEmojisData(filteredData);
      setIsGameOn(true);
    } catch (error) {
      console.error(error);
    }
    setIsGameOn(true);
  }

  function turnCard() {
    console.log("Memory card clicked");
  }

  console.log(emojisData);
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}

export default App;
