import 'mocha';
import { expect } from 'chai';
import { originator, Caretaker } from 'src/behavioral/Memento';

describe('Memento tests', () => {
  it('can get recent chat messages of the care taker', () => {
    const careTaker = new Caretaker();
    careTaker.addMemento(originator.store("hello"));
    careTaker.addMemento(originator.store("hello world"));
    careTaker.addMemento(originator.store("hello world !!!"));


    var result = originator.restore(careTaker.getMemento(1));
    expect(result).to.equal("hello world");
  });
});