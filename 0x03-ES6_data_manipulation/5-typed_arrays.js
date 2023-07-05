export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new Int8Array(buffer);

  if (position > dataView.length - 1 || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error('Position outside range');
  }

  dataView[position] = value;
  return buffer;
}
