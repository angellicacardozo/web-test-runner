export function sum(...numbers) {
  return numbers.reduce((prev, crr) => prev + crr, 0);
}