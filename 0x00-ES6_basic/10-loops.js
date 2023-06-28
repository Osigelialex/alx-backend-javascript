export default function appendToEachArrayValue(array, appendString) {
  const modified = [];

  for (let idx of array) {
    modified.push(appendString + idx);
  }

  return modified;
}
