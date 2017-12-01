import 'mocha';
import { expect } from 'chai';
import { Num, Min, Sum } from 'src/behavioral/Interpreter';

describe('Interpreter tests', () => {
  it('Use Algorithms using Interpreter behavior', () => {
    var result = new Sum(new Num(100), new Min(new Num(100), new Num(50)));
    expect(result.interpret()).to.equal(150);
  });
});