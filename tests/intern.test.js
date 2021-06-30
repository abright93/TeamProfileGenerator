const Intern = require("../library/intern");

test ('creates an intern object', () => {
  const intern = new Intern('', '', '', '');
  expect(intern.name).toBe('');
  expect(intern.id).toBe('');
  expect(intern.email).toBe('');
  expect(intern.school).toBe('');
});

test("gets intern's school", () => {
  const intern = new Intern('', '', '', '');
  expect(intern.getSchool()).toEqual(expect.stringContaining(''));
});

test("gets intern's role", () => {
  const intern = new Intern('', '', '', '');

  expect(intern.getRole()).toEqual(expect.stringContaining(''));
});
