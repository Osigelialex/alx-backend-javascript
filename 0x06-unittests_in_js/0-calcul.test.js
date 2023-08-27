const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Should round off numbers properly', () => {
    const testCase1 = calculateNumber(5.5, 2.1);
    assert.equal(testCase1, 8);
  });
  it('Should handle negative values properly', () => {
    const testCase1 = calculateNumber(-3.7, -3.5);
    assert.equal(testCase1, -7);
  });
  it('Should handle long floats properly', () => {
    const testCase1 = calculateNumber(-3.999, -4.999);
    assert.equal(testCase1, -9);
  })
});
