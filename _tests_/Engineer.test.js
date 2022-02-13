const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  //constructor test with  addition of github username
  it('Engineer constructor takes github param', ()=> {
    const engineer = new Engineer('laura', 1234, 'letter@email.com', 'username');

    expect(engineer.github).toBe('username');
  });
  //getGithub test
  it('getGithub returns correct value', ()=> {
    expect(new Engineer('laura', 1234, 'letter@email.com', 'username').getGithub()).toBe('https://github.com/username');
  })
  //getRole test
  it('getRole returns correct role', ()=> {
    expect(new Engineer('laura', 1234, 'letter@email.com', 'username').getRole()).toBe('Engineer');
  })
});