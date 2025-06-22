import getRandomIndices from "./random-number";

type EmojiData = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};

export default function getDataSlice(data: EmojiData[]) {
  // the getRandomIndicies function gets 5 random numbers from 1 to the length of the array
  const randomIndicies = getRandomIndices(data);

  // creates array that stores the emojies in the given array indicex
  const dataSlice = randomIndicies.map((i) => data[i]);

  return dataSlice;
}
