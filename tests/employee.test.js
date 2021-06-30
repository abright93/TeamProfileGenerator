const Employee = require('../library/employee');

test('creates an employee object', () => {
    const employee = new Employee('', '', '');

    expect(employee.name).toBe('');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
});

test("gets employee's name", () => {
    const employee = new Employee('', '', '');

    expect(employee.getName()).toEqual(expect.stringContaining(''));
});

test("gets employee's ID", () => {
    const employee = new Employee('', '', '');

    expect(employee.getId()).toEqual(expect.stringContaining(''));
});

test("gets employee's email", () => {
    const employee = new Employee('', '', '');

    expect(employee.getEmail()).toEqual(expect.stringContaining(''));
});

test("gets employee's role", () => {
    const employee = new Employee('', '', '');

    expect(employee.getRole()).toEqual(expect.stringContaining(''));
});