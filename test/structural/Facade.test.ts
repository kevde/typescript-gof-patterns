import 'mocha';
import { expect } from 'chai';
import ShopFacade from 'src/structural/Facade';

describe('Facade tests', () => {
  it('should computation based on a shop', () => {
    const shop = new ShopFacade();
    const result = shop.calc(100);
    expect(result).to.equal(99.5);
    expect(result).to.equal(100 * shop.discount.percent * shop.fees.percent + shop.shipping.percent);
  });
});