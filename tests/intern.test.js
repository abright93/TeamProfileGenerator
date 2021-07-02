const Intern = require("../library/intern");

describe("intern", () => {
  const intern = new Intern('Alex', '12345', 'test@email.com', 'UPenn');
  it("getName = name", () => {
    expect(intern.getName()).toEqual('Alex');
  })
  it("getID = id", () => {
    expect(intern.getId()).toEqual('12345');
  })
  it("getEmail = email", () => {
    expect(intern.getEmail()).toEqual('test@email.com');
  })
  it("getSchool = school", () => {
    expect(intern.getSchool()).toEqual('UPenn');
  })    
});