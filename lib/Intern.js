const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {return this.school};
  getRole() {return 'Intern'};
  askInfo() {
    return [...super.askInfo(), 
      {
        type: "input",
        name: "school",
        message: `Intern school:`
      }
    ]};

}

module.exports = Intern;