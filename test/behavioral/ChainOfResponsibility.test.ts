import 'mocha';
import { expect } from 'chai';

import { ShoppingCart, Discount } from 'src/behavioral/ChainOfResponsibility';

describe('ChainOfResponsibility tests', () => {

  it(' > $ 500', () => {
    var discount = new Discount();

    var sc = new ShoppingCart();
    sc.addProduct(1000);

    var resp = discount.exec(sc.products);

    expect(resp).to.equal(0.1);
  });

  it('mote than 3 products', () => {
    var discount = new Discount();

    var sc = new ShoppingCart();
    sc.addProduct(100);
    sc.addProduct(100);
    sc.addProduct(100);
    sc.addProduct(100);

    var resp = discount.exec(sc.products);

    expect(resp).to.equal(0.05);
  });

  it('mote than 3 products and > $ 500 ', () => {
    var discount = new Discount();

    var sc = new ShoppingCart();
    sc.addProduct(1000);
    sc.addProduct(100);
    sc.addProduct(100);
    sc.addProduct(100);

    var resp = discount.exec(sc.products);

    expect(resp.toFixed(2)).to.equal('0.15');
  });
});