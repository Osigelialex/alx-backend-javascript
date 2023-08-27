const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Should round off numbers properly', () => {
    const case1 = calculateNumber(5.5, 2.1);
    const case2 = calculateNumber(-3.5, -3.7);
    assert.equal(case1, 8);
    assert.equal(case2, -7);
  });
});
