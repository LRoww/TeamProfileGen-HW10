class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {return this.name};
  getId() {return this.id.toString()};
  getEmail() {return this.email};

  getRole(){return 'Employee'};

  askInfo() {
    return [
      {
        type: "input",
        name: "name",
        message: `${this.getRole()} name:`
      },
      {
        type: "input",
        name: "id",
        message: `${this.getRole()} id:`
      },
      {
        type: "input",
        name: "email",
        message: `${this.getRole()} email:`
      }
    ]
  }
}

module.exports = Employee;