import * as Machine from './vendingMachine';

let machine = new Machine.VendingMachine();
machine.size = Machine.VendingMachineSize.MEDIUM;
ko.applyBindings(machine);