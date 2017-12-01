
interface Interpreter {
  interpret: () => any;
}
class Sum implements Interpreter {
  left: Interpreter;
  right: Interpreter;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class Min  implements  Interpreter{
  left: Interpreter;
  right: Interpreter;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}


class Num implements Interpreter{
  val: number;
  constructor(val) {
    this.val = val;
  }

  interpret() {
    return this.val;
  }
}

export { Num, Min, Sum };