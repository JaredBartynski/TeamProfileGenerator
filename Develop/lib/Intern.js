// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.getSchool = () => this.school;
    this.getRole = () => "Intern";
  }
}

const employee1 = new Intern("Bob", 1, "bob@email.com", "UPenn");

module.exports = Intern;
