abstract class Printer {
  ink: Ink;
  abstract print(): String;
  constructor(ink) {
    this.ink = ink;
  }
}

// ** Create Printers

// HPPrinter
// EpsonPrinter 

class Ink {
  type: String;
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

// ** Create Inks
// AcrylicInk = "acrylic-based"
// AlcoholInk = "alcohol-based"


export { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk };