const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {return 'Manager'};
  askInfo() {
    return [...super.askInfo(), 
      {
        type: "input",
        name: "officeNumber",
        message: `Manager office number:`
      }
    ];
  }

  getHTML(){
    return `<div class="col">
    <div class="card shadow">
    <div class="card-header text-white bg-primary">${this.getName()}
    <i class="bi bi-briefcase-fill"></i>
    ${this.getRole()}</div>
    <div class="card-body bg-light">
      <p class="card-text">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto: ${this.getEmail()}">${this.email}</a></li>
          <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
      </p>
    </div>
  </div>
  </div>`;
  }

}

module.exports = Manager;