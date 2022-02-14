const inquirer = require("inquirer");
const Generator = require('../lib/Generator');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

jest.mock("inquirer");

describe('Generator class', ()=> {
  it('empty team array is created upon contruction', ()=> {
    expect(new Generator().team).toEqual([]);
  });
})