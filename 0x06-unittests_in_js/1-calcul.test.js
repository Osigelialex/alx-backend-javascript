const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('#sum', () => {
    it('Should round off numbers properly', () => {
      const testCase1 = calculateNumber('SUM', 5.5, 2.1);
      assert.equal(testCase1, 8);
    });
    it('Should handle negative values properly', () => {
      const testCase1 = calculateNumber('SUM', -3.7, -3.5);
      assert.equal(testCase1, -7);
    });
    it('Should handle long floats properly', () => {
      const testCase1 = calculateNumber('SUM', -3.999, -4.999);
      assert.equal(testCase1, -9);
    })
  });
  describe('#divide', () => {
    it('Should divide properly', () => {
      const testCase1 = calculateNumber('DIVIDE', 2, 0.5);
      assert.equal(testCase1, 2);
    })
    it('Should handle zero division properly', () => {
      const testCase1 = calculateNumber('DIVIDE', 0.5, 0.3);
      const testCase2 = calculateNumber('DIVIDE', 5, 0);
      assert.equal(testCase1, 'Error');
      assert.equal(testCase2, 'Error');
    });
  });
  describe('#subtract', () => {
    it('Should subtract negatives properly', () => {
      const testCase1 = calculateNumber('SUBTRACT', -2, -2);
      assert.equal(testCase1, 0);
    });
    it('Should subtract larger numbers from smaller ones', () => {
      const testCase1 = calculateNumber('SUBTRACT', 5, -10);
      assert.equal(testCase1, 15);
    })
  })
})