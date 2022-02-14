const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };

  getGithub() {return `https://github.com/${this.github}`};
  getRole() {return 'Engineer'};
  askInfo() {
    return [...super.askInfo(), 
      {
        type: "input",
        name: "github",
        message: `Engineer github username:`
      }
    ]};
}

module.exports = Engineer;