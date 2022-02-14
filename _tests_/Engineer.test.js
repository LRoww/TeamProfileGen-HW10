const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  describe('Base tests', ()=> {
    //constructor test with  addition of github username
    it('Engineer constructor takes github param', ()=> {
      const engineer = new Engineer('laura', 1234, 'letter@email.com', 'username');

      expect(engineer.github).toBe('username');
    });
    //getGithub test
    it('getGithub returns correct value', ()=> {
      expect(new Engineer('laura', 1234, 'letter@email.com', 'username').getGithub()).toBe('https://github.com/username');
    });
    //getRole test
    it('getRole returns correct role', ()=> {
      expect(new Engineer('laura', 1234, 'letter@email.com', 'username').getRole()).toBe('Engineer');
    });
  });
  describe('inquirer tests', ()=> {
    it('askInfo has correct message', ()=> {
      const engineer = new Engineer('laura', 1234, 'letter@email.com', 'username');
      const responce = engineer.askInfo();
      const data = [
        {
          type: "input",
          name: "name",
          message: `Engineer name:`
        },
        {
          type: "input",
          name: "id",
          message: `Engineer id:`
        },
        {
          type: "input",
          name: "email",
          message: `Engineer email:`
        },
        {
          type: "input",
          name: "github",
          message: `Engineer github username:`
        }
      ];
      expect(responce).toEqual(data);
    })
  })

});