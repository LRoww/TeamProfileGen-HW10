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
      <div class="card shadow">
      <div class="card-header text-white bg-primary">${this.getName()} 
      <i class="bi bi-laptop-fill"></i>
      ${this.getRole()}</div>
      <div class="card-body bg-light">
        <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${this.getEmail()}">${this.email}</a></li>
            <li class="list-group-item">Github Username: <a href="${this.getGithub()}">${this.github}</a></li>
          </ul>
        </p>
      </div>
    </div>
    </div>`;
    }
}

module.exports = Engineer;