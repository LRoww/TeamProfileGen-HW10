const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {return this.school.toString()};
  getRole() {return 'Intern'};
  askInfo() {
    return [...super.askInfo(), 
      {
        type: "input",
        name: "school",
        message: `Intern school:`
      }
    ]};

    getHTML(){
      return `
      <div class="col">
      <div class="card shadow">
      <div class="card-header text-white bg-primary">${this.getName()} 
      <i class="bi bi-mortarboard-fill"></i>
      ${this.getRole()}</div>
      <div class="card-body bg-light">
        <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${this.getEmail()}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.getSchool()}</li>
          </ul>
        </p>
      </div>
    </div>
    </div>`;
    }
}

module.exports = Intern;