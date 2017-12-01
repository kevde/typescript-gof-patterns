import 'mocha';
import { expect } from 'chai';
import Iterator from 'src/behavioral/Iterator';

describe('iterator es6 tests', () => {
  it('sanity', () => {
    test(Iterator);
  });

});

function test(Iterator) {
  var numbers = new Iterator([1, 2, 3]);

  expect(numbers.next()).to.equal(1);
  expect(numbers.next()).to.equal(2);
  expect(numbers.next()).to.equal(3);
  expect(numbers.hasNext()).to.false;
}