const inquirer = require("inquirer");
const Gatherer = require('../lib/Gatherer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

jest.mock("inquirer");

describe('Gatherer class', ()=> {
  it('empty team array is created upon contruction', ()=> {
    expect(new Gatherer().team).toEqual([]);
  });
  // it('after calling askManager team array has item added', async ()=> {
  //   const gatherer = new Gatherer();
  //   const value = {
  //     name: 'laura',
  //     id: '123423',
  //     email: 'email@asda',
  //     officeNumber: '456'
  //   };
  //   jest.gatherer.askManager().mockImplementationOnce(() => Promise.resolve(value));

  //   // const asyncMock = jest.gatherer.askManager()
  //   //   .mockResolvedValue('')
  //   //   .mockResolvedValueOnce(123)
  //   //   .mockResolvedValueOnce('second call')
  //   //   .mockResolvedValueOnce('third call');

  //   // await asyncMock
  // })
})