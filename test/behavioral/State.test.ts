import 'mocha';
import { expect } from 'chai';
import Order from '../../src/behavioral/State';

describe('State tests', () => {

  it('should change state per triggerto change state from order', () => {
    const order = new Order();
    expect(order.state.name).to.equal('waitingForPayment');
    order.nextState();
    expect(order.state.name).to.equal('shipping');
    order.nextState();
    expect(order.state.name).to.equal('delivered');
  });

});