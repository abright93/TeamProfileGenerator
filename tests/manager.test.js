const Manager = require("../library/manager");

test('creates a manager object', () => {
  const manager = new Manager('', '', '', '');
  
  expect(manager.name).toBe('');
  expect(manager.id).toBe('');
  expect(manager.email).toBe('');
  expect(manager.officeNumber).toBe('');
});

test("gets employee's role", () => {
  const manager = new Manager('', '', '', '');

  expect(manager.getRole()).toEqual(expect.stringContaining(''));
});