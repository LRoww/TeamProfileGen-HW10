const Manager = require('../lib/Manager');

describe('Manager Class', () => {
  //constructor test with officeNumber adition 
  it('Manager object is created with name, id, email, and officeNumber parameters', () => {
    const manager = new Manager('laura', 1234, 'letter@email.com', 123);

    expect(manager.officeNumber).toBe(123);
  })
  //getRole is overridden to return 'Manager'
  it('getRole returns correct value', () => {
    expect(new Manager('laura', 1234, 'letter@email.com', 123).getRole()).toBe('Manager');
  });
});