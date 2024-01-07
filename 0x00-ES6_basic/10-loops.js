export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    newArr.push(appendString + value);
  }

  return newArr;
}
