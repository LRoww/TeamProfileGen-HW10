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

    getHTML(){
      return `
      <div class="col">
      <div class="card">
      <div class="card-header text-white bg-primary">${this.getName()} - ${this.getRole()}</div>
      <div class="card-body bg-light">
        <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item" href="${this.getEmail()}">Email: ${this.getEmail()}</li>
            <li class="list-group-item" href="${this.getGithub()}">Github Username: ${this.github}</li>
          </ul>
        </p>
      </div>
    </div>
    </div>`;
    }
}

module.exports = Engineer;