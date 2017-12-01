class Cockpit {
  command: Command;
  constructor(command) {
    this.command = command;
  }
  execute() {
    this.command.execute();
  }
}

class Turbine {
  state: boolean;
  constructor() {
    this.state = false;
  }
  on() {
    this.state = true;
  }
  off() {
    this.state = false;
  }
}

abstract class Command {
  turbine: Turbine;
  abstract execute();
  constructor(turbine) {
    this.turbine = turbine;
  }
}

class OnCommand extends Command {
  execute() {
    this.turbine.on();
  }
}

class OffCommand extends Command {
  execute() {
    this.turbine.off();
  }
}

export { Cockpit, Turbine, OnCommand, OffCommand };