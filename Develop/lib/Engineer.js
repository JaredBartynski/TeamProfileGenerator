// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.getGithub = () => this.github;
    this.getRole = () => "Engineer";
  }
}

const employee1 = new Engineer("Bob", 1, "bob@email.com", "bob");

module.exports = Engineer;
