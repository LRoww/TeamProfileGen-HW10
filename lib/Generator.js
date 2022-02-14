const inquirer = require("inquirer");
const Employee = require('./Employee');
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
  
  // askForManager() {
  //   inquirer
  //     .prompt([
  //       {
  //         type: "input",
  //         name: "name",
  //         message: "Manager name:"
  //       },
  //       {
  //         type: "input",
  //         name: "id",
  //         message: "Manager Id:"
  //       },
  //       {
  //         type: "input",
  //         name: "email",
  //         message: "Manager email:" 
  //       }
  //     ])
  // }

  run(){
    console.log("start!");
  }

}

module.exports = Generator;