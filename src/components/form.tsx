import RegularBtn from "./regaular-btn";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Form = ({ handleSubmit }: Props) => {
  return (
    <form className="wrapper">
      <RegularBtn handleClick={handleSubmit}>Start Game</RegularBtn>
    </form>
  );
};

export default Form;
