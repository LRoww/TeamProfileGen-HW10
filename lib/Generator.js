const inquirer = require("inquirer");
const Employee = require('./Employee');
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');


class Generator {
  constructor() {
    this.team = [];
  }

  //start 
  //inquire manager info
  //menu for team memeber type
    //inquire team member
  //menu for team member or done
  //done

  start(){
    console.log("start!");
    this.askManager();
  }

  next(){
    inquirer
      .prompt([
        {
          type: "list",
          name: "next",
          messgae: "Add another team member?",
          choices: ["Engineer", "Intern", "Done"]
        }
      ])
      .then(val => {
        console.log(val.next);
        if(val.next === 'Done'){
          this.end()
        } else if(val.next === 'Engineer') {
          this.askEngineer();
        } else if(val.next === 'Intern') { this.askIntern()};
      })
  }

  end(){ 
    console.log(`Team is done! ${this.team.toString()}`);
    console.log(`${this.team[0]}`);
  }

  askEngineer() {
    let engineer = new Engineer();
    inquirer
      .prompt(engineer.askInfo())
      .then((data)=> {
        engineer.name = data.name;
        engineer.id = data.id;
        engineer.email = data.email;
        engineer.github = data.github;

        console.log(engineer);
        this.team.push(engineer); // adds item to team array
        this.next();
      })
  }

  askIntern() {
    let intern = new Intern();
    inquirer
      .prompt(intern.askInfo())
      .then((data)=> {
        intern.name = data.name;
        intern.id = data.id;
        intern.email = data.email;
        intern.school = data.school;

        console.log(intern);
        this.team.push(intern); // adds item to team array
        this.next();
      })
  }

  askManager() {
    let manager = new Manager();
    inquirer
      .prompt(manager.askInfo()) // asks for manager info
      .then((data)=> { // assigns info to new manager obj
        manager.name = data.name;
        manager.id = data.id;
        manager.email = data.email;
        manager.officeNumber = data.officeNumber;

        console.log(manager);
        this.team.push(manager); // adds manager item to team array
        this.next();
      })
  }

}

module.exports = Generator;