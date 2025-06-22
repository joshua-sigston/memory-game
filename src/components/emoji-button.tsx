type SelectedCard = {
  name: string;
  index: number;
};

interface Props {
  content: string;
  style: string;
  onClick: () => void;
  selectedCardEntry?: SelectedCard;
  matchedCardEntry?: SelectedCard;
}

const EmojiButton = ({
  content,
  onClick,
  selectedCardEntry,
  matchedCardEntry,
}: Props) => {
  const btnContent = matchedCardEntry || selectedCardEntry ? content : "?";
  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "btn--emoji__front";
  return (
    <button className={`btn btn--emoji ${btnStyle}`} onClick={onClick}>
      {btnContent}
    </button>
  );
};

export default EmojiButton;
