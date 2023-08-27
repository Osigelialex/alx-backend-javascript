const calculateNumber = (type, a, b) => {
  const first = Math.round(a);
  const second = Math.round(b);

  if (type === 'SUM') return first + second;
  if (type === 'SUBTRACT') return second - first;
  if (type === 'DIVIDE' && second === 0) return "Error";
  if (type === 'DIVIDE') return first / second;
};

module.exports = calculateNumber;
