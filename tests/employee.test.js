const Employee = require('../library/employee');

describe("employee", () => {
    const employee = new Employee('Alex', '12345', 'test@email.com');
    it("getName = name", () => {
      expect(employee.getName()).toEqual('Alex');
    })
    it("getID = id", () => {
      expect(employee.getId()).toEqual('12345');
    })
    it("getEmail = email", () => {
      expect(employee.getEmail()).toEqual('test@email.com');
    })
  });