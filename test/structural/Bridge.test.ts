import 'mocha';
import { expect } from 'chai';
import { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk } from 'src/structural/Bridge';

describe('Bridge tests', () => {
  it('Epson test', () => {
    const printer = new EpsonPrinter(new AlcoholInk());
    const result = printer.print();
    expect(result).to.equal("Printer: Epson, Ink: alcohol-based");
  });

  it('HP test', () => {
    const printer = new HPprinter(new AcrylicInk());
    const result = printer.print();
    expect(result).to.equal("Printer: HP, Ink: acrylic-based");
  });
});