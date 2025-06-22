type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};

// function that creates an new array from shuffleing the original array
export default function getShuffledArray(data: EmojiData[]) {
  const array = [...data, ...data];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
