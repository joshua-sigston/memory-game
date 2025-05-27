// const randomNumber: number = Math.floor(Math.random() * 20) + 1;

export default function getRandomNumber() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const num3 = Math.floor(Math.random() * 20) + 1;
  const num4 = Math.floor(Math.random() * 20) + 1;
  const num5 = Math.floor(Math.random() * 20) + 1;

  return [num1, num2, num3, num4, num5];
}
