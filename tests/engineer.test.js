const Engineer = require("../library/engineer");

test('creates an engineer object', () => {
  const engineer = new Engineer ('', '', '', '')
  
  expect(engineer.name).toBe('');
  expect(engineer.id).toBe('');
  expect(engineer.email).toBe('');
  expect(engineer.github).toBe('');
});

test ("gets engineer's github username", () => {
  const engineer = new Engineer ('', '', '', '')

  expect(engineer.getGithub()).toEqual(expect.stringContaining(''));
});

test("gets engineer's role", () => {
  const engineer = new Engineer ('', '', '', '')

  expect(engineer.getRole()).toEqual(expect.stringContaining(''));
});