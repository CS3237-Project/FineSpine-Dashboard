/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};
