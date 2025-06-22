type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};

// funciton that creates an array of random numbers that start at 1 and end at the length of the array
export default function getRandomIndices(data: EmojiData[]) {
  const randomIndicesArray: number[] = [];
  for (let index = 0; index < 5; index++) {
    const rand = Math.floor(Math.random() * data.length) + 1;
    if (!randomIndicesArray.includes(rand)) {
      randomIndicesArray.push(rand);
    } else {
      index--;
    }
  }

  return randomIndicesArray;
}
