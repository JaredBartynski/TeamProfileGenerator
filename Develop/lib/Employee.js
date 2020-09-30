// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = () => this.name;

    this.getId = () => this.id;

    this.getEmail = () => this.email;

    this.getRole = () => "Employee";
  }
}

const employee1 = new Employee("Bob", 1, "bob@email.com");

module.exports = Employee;
