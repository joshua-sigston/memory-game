import { decodeEntity } from "html-entities";

type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
};

interface Props {
  handleClick: () => void;
  data: EmojiData[];
}

const MemoryCard = ({ handleClick, data }: Props) => {
  const emojiArray = data.map((item) => item.htmlCode[0]);

  // console.log(emojiArray);

  const emojiEl = emojiArray.map((emoji, index) => (
    <li key={index} className="card-item">
      <button className="btn btn--emoji" onClick={handleClick}>
        {decodeEntity(emoji)}
      </button>
    </li>
  ));

  return <ul className="card-container">{emojiEl}</ul>;
};

export default MemoryCard;
