import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import MemoryCard from "./components/memory-card";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

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
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setIsGameOn(true);
  }

  function turnCard() {
    console.log("Memory card clicked");
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} />}
    </main>
  );
}

export default App;
