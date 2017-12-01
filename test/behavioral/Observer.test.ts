import 'mocha';
import { expect } from 'chai';
import { Product, fees, proft } from 'src/behavioral/Observer';

describe('Observer tests', () => {
  it('sanity', () => {
    test(Product, new fees(), new proft());
  });

});


function test(Product, fees, proft) {
  const product = new Product();
  product.register(fees);
  product.register(proft);
  product.setBasePrice(100);
  expect(product.price).to.equal(240);
}