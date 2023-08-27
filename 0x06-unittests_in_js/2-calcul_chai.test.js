const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('#sum', () => {
    it('Should round off numbers properly', () => {
      const testCase1 = calculateNumber('SUM', 5.5, 2.1);
      expect(testCase1).to.equal(8);
    });
    it('Should handle negative values properly', () => {
      const testCase1 = calculateNumber('SUM', -3.7, -3.5);
      expect(testCase1).to.equal(-7);
    });
    it('Should handle long floats properly', () => {
      const testCase1 = calculateNumber('SUM', -3.999, -4.999);
      expect(testCase1).to.equal(-9);
    })
  });
  describe('#divide', () => {
    it('Should divide properly', () => {
      const testCase1 = calculateNumber('DIVIDE', 2, 0.5);
      expect(testCase1).to.equal(2);
    })
    it('Should handle zero division properly', () => {
      const testCase1 = calculateNumber('DIVIDE', 0.5, 0.3);
      const testCase2 = calculateNumber('DIVIDE', 5, 0);
      expect(testCase1).to.equal('Error');
      expect(testCase2).to.equal('Error');
    });
  });
  describe('#subtract', () => {
    it('Should subtract negatives properly', () => {
      const testCase1 = calculateNumber('SUBTRACT', -2, -2);
      expect(testCase1).to.equal(0);
    });
    it('Should subtract negative from positive', () => {
      const testCase1 = calculateNumber('SUBTRACT', 5, -10);
      expect(testCase1).to.equal(15);
    })
    it('Should subtract bigger number from smaller number', () => {
      const testCase1 = calculateNumber('SUBTRACT', 4.5, 5.5);
      expect(testCase1).to.equal(-1);
    })
    it('Should subtract floats properly', () => {
      const testCase1 = calculateNumber('SUBTRACT', -5.5, 10.2);
      expect(testCase1).to.equal(-15);
    })
  })
})