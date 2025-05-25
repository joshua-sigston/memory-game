import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import MemoryCard from "./components/memory-card";
import { decodeEntity } from "html-entities";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

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
      const dataSample = data.slice(0, 5);
      setEmojisData(dataSample);
    } catch (error) {
      console.error(error);
    }
    setIsGameOn(true);
  }

  function turnCard() {
    console.log("Memory card clicked");
  }
  // console.log(emojisData);
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}

export default App;
