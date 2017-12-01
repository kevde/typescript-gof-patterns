class Color {
  name: String;
  constructor(name) {
    this.name = name;
  }
}

class ColorFactory {
  colors = {};

  create(name) {
    let color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);
    return this.colors[name];
  }
}

export default new ColorFactory();