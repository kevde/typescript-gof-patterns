 class Color {
  name: String;
  constructor(name) {
    this.name = name;
  }
}

class ColorFactory {
  colors = {};

  create(name) {
  }
}

export default new ColorFactory();