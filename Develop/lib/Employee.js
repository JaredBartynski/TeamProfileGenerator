// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function () {
      return name;
    };
    this.getId = function () {
      return id;
    };
    this.getEmail = function () {
      return email;
    };
    this.getRole = function () {
      return "Employee";
    };
  }
}

module.exports = Employee;
