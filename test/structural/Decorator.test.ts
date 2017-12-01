import 'mocha';
import { expect } from 'chai';
import { Penne, SauceDecorator, CheeseDecorator } from 'src/structural/Decorator';

describe('Decorator tests', () => {
  it('should prices vary when Penne is decorated', () => {
    const penne = new Penne();
    const penneWithSauce = new SauceDecorator(penne);
    const penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce);

    expect(penne.getPrice()).to.equal(8);
    expect(penneWithSauce.getPrice()).to.equal(13);
    expect(penneWithSauceAndCheese.getPrice()).to.equal(16);
  });
});