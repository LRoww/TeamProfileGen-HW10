const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require('./Employee');
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require('./Manager');

class Gatherer {
  constructor() {
    this.team = [];
  }

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
    console.log(`${this.team[0].name}`);
    fs.writeFileSync('index.html', this.genHTML());
  }

  genHTML(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>Document</title>
    
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">My Team</h1>
    
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
    
            ${this.team.map(employee => employee.getHTML())}
    
          </div>
          </div>
        </div>
      </div>
      </div>
      
    </body>
    
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`
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

module.exports = Gatherer;