class ShoppingCart {
  products = [];

  addProduct(p) {
    this.products.push(p);
  }
}

abstract class IDiscount {
  abstract exec(products): number;
  next: IDiscount;
  setNext(discount) {
    this.next = discount;
  }
}

class Discount extends IDiscount {
  exec(products) {
    var ndiscount = new NumberDiscount();
    var pdiscount = new PriceDiscount();
    var none = new NoneDiscount();

    ndiscount.setNext(pdiscount);
    pdiscount.setNext(none);

    return ndiscount.exec(products);
  }
}

class NumberDiscount extends IDiscount {
  exec(products) {
    var result = 0;
    if (products.length > 3)
      result = 0.05;

    return result + this.next.exec(products);
  }
}

class PriceDiscount extends IDiscount {
  exec(products) {
    var result = 0;
    var total = products.reduce((a, b) => a + b);
    if (total >= 500)
      result = 0.1;

    return result + this.next.exec(products);
  }
}

class NoneDiscount extends IDiscount {
  exec() {
    return 0;
  }
}

export { ShoppingCart, Discount };