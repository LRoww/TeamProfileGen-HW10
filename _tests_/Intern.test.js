const Intern = require('../lib/Intern');

describe('Intern Class', () => {
  describe('Base tests', ()=> {
      //constructor test with  addition of school
    it('Intern object is created with school param', ()=> {
      const intern = new Intern('laura', 1234, 'letter@email.com', 'UFT');
      expect(intern.school).toBe('UFT');
    });
    //getSchool test
    it('getSchool returns correct value', ()=> {
      expect(new Intern('laura', 1234, 'letter@email.com', 'UFT').getSchool()).toBe('UFT');
    });
    //getRole test
    it('getRole return correct value', ()=> {
      expect(new Intern('laura', 1234, 'letter@email.com', 'UFT').getRole()).toBe('Intern');
    });
  })
  describe('inquirer tests', ()=> {
    it('askInfo has correct message', ()=> {
      const intern = new Intern('laura', 1234, 'letter@email.com', 'UFT');
      const responce = intern.askInfo();
      const data = [
        {
          type: "input",
          name: "name",
          message: `Intern name:`
        },
        {
          type: "input",
          name: "id",
          message: `Intern id:`
        },
        {
          type: "input",
          name: "email",
          message: `Intern email:`
        },
        {
          type: "input",
          name: "school",
          message: `Intern school:`
        }
      ];
      expect(responce).toEqual(data);
    })
  })
});