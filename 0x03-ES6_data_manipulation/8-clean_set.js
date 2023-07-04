export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  const arr = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const rest = value.slice(startString.length);
      arr.push(rest);
    }
  }
  return arr.join('-');
}
