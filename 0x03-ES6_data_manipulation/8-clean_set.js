export default function cleanSet(set, startString) {
  const arr = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      const rest = value.slice(startString.length);
      arr.push(rest);
    }
  }
  return arr.join('-');
}
