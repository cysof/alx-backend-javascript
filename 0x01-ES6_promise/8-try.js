/**
 * Divides the numerator by the denominator and returns the result.
 *
 * @param {number} numerator - The numerator to be divided.
 * @param {number} denominator - The denominator to divide the numerator by.
 * @return {number} The result of dividing the numerator by the denominator.
 * @throws {Error} Throws an error if the denominator is zero.
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else return numerator / denominator;
  }