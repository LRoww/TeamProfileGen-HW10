const { execPath } = require('process');
const Intern = require('../lib/Intern');

describe('Intern Class', () => {
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
});