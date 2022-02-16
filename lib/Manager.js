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
    return `<div class="card">
    <div class="card-header text-white bg-primary">${this.getName()} - ${this.getRole()}</div>
    <div class="card-body bg-light">
      <p class="card-text">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.getId()}</li>
          <li class="list-group-item">Email: ${this.getEmail()}</li>
          <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
      </p>
    </div>
  </div>`;
  }

}

module.exports = Manager;