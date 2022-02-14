const Manager = require('../lib/Manager');

describe('Manager Class', () => {
  describe('Base tests', ()=> {
    //constructor test with officeNumber adition 
    it('Manager object is created with name, id, email, and officeNumber parameters', () => {
      const manager = new Manager('laura', 1234, 'letter@email.com', 123);

      expect(manager.officeNumber).toBe(123);
    })
    //getRole is overridden to return 'Manager'
    it('getRole returns correct value', () => {
      expect(new Manager('laura', 1234, 'letter@email.com', 123).getRole()).toBe('Manager');
    });
  })
  describe('inquirer tests', ()=> {
    it('askInfo has correct message', ()=> {
      const manager = new Manager('laura', 1234, 'letter@email.com', 123);
      const responce = manager.askInfo();
      const data = [
        {
          type: "input",
          name: "name",
          message: `Manager name:`
        },
        {
          type: "input",
          name: "id",
          message: `Manager id:`
        },
        {
          type: "input",
          name: "email",
          message: `Manager email:`
        },
        {
          type: "input",
          name: "officeNumber",
          message: `Manager office number:`
        }
      ];
      expect(responce).toEqual(data);
    })
  })
});