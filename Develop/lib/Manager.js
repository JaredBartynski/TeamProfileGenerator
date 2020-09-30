// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.getOfficeNumber = () => this.officeNumber;
    this.getRole = () => "Manager";
  }
}

const employee1 = new Manager("Bob", 1, "bob@email.com", "100");

module.exports = Manager;
