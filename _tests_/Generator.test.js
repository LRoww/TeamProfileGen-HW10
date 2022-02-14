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
  // it('after calling askManager team array has item added', async ()=> {
  //   const generator = new Generator();
  //   const value = {
  //     name: 'laura',
  //     id: '123423',
  //     email: 'email@asda',
  //     officeNumber: '456'
  //   };
  //   jest.generator.askManager().mockImplementationOnce(() => Promise.resolve(value));

  //   // const asyncMock = jest.generator.askManager()
  //   //   .mockResolvedValue('')
  //   //   .mockResolvedValueOnce(123)
  //   //   .mockResolvedValueOnce('second call')
  //   //   .mockResolvedValueOnce('third call');

  //   // await asyncMock
  // })
})