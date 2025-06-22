type SelectedCard = {
  name: string;
  index: number;
};

interface Props {
  content: string;
  style: string;
  handleClick: () => void;
  selectedCardEntry?: SelectedCard;
  matchedCardEntry?: SelectedCard;
}

const EmojiButton = ({
  content,
  handleClick,
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
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? () => {} : handleClick}
      disabled={!!matchedCardEntry}
    >
      {btnContent}
    </button>
  );
};

export default EmojiButton;
