import { decodeEntity } from "html-entities";
import EmojiButton from "./emoji-button";

type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
};

type SelectedCard = {
  name: string;
  index: number;
};

interface Props {
  handleClick: (name: string, index: number) => void;
  data: EmojiData[];
  selectedCards?: SelectedCard[];
  matchedCards?: SelectedCard[];
}

const MemoryCard = ({
  handleClick,
  data,
  selectedCards = [],
  matchedCards = [],
}: Props) => {
  const emojiEl = data.map((emoji, index) => {
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index
    );
    const matchedCardEntry = matchedCards.find(
      (emoji) => emoji.index === index
    );
    const cardStyle = matchedCardEntry
      ? "card-item--matched"
      : selectedCardEntry
      ? "card-item--selected"
      : "";

    return (
      <li key={index} className={`card-item ${cardStyle}`}>
        <EmojiButton
          content={decodeEntity(emoji.htmlCode[0])}
          style="btn btn--emoji"
          onClick={() => handleClick(emoji.name, index)}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
        />
        n
      </li>
    );
  });

  return <ul className="card-container">{emojiEl}</ul>;
};

export default MemoryCard;
