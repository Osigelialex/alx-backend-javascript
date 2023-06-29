export default function appendToEachArrayValue(array, appendString) {
  const modified = [];

  for (const idx of array) {
    modified.push(appendString + idx);
  }

  return modified;
}
