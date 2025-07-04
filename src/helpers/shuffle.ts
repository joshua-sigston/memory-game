export default function shuffleArray<T>(array: T[]): T[] {
  const result = [...array]; // Create a shallow copy to avoid mutating the original array

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [result[i], result[j]] = [result[j], result[i]]; // Swap elements
  }
  console.log(result);
  return result;
}
