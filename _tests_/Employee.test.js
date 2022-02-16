const inquirer = require("inquirer");
const Employee = require('../lib/Employee');

jest.mock("inquirer");

describe('Employee Class', () => {
  describe('Base tests', ()=> {
      //general constructor test
    it('Employee object is created with name, id, email parameters', () => {
      const employee = new Employee('laura', 1234, 'letter@email.com');

      expect(employee.name).toBe('laura');
      expect(employee.id).toBe(1234);
      expect(employee.email).toBe('letter@email.com');
    });
    //get name/Id/Email returns proper value
    it('getName return correct value', () => {
      expect(new Employee('laura', 1234, 'letter@email.com').getName()).toBe('laura');
    });
    it('getId return correct value', () => {
      expect(new Employee('laura', 1234, 'letter@email.com').getId()).toBe('1234');
    });
    it('getEmail return correct value', () => {
      expect(new Employee('laura', 1234, 'letter@email.com').getEmail()).toBe('mailto: letter@email.com');
    });
    //getRole returns 'Employee'
    it('getRole returns Employee', () => {
      expect(new Employee('laura', 1234, 'letter@email.com').getRole()).toBe('Employee');
    });
  })
  describe('inquirer tests', ()=> {
    it('askInfo has correct message', ()=> {
      const employee = new Employee('laura', 1234, 'letter@email.com');
      const responce = employee.askInfo();
      const data = [
        {
          type: "input",
          name: "name",
          message: `Employee name:`
        },
        {
          type: "input",
          name: "id",
          message: `Employee id:`
        },
        {
          type: "input",
          name: "email",
          message: `Employee email:`
        }
      ];
      expect(responce).toEqual(data);
    })
  })
  
});