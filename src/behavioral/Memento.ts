class Memento {
  value: any;

  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function(val) {
    return new Memento(val);
  },
  restore: function(memento) {
    return memento.value;
  }
};

class Caretaker {
  values: String[];

  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}



export { originator, Caretaker };