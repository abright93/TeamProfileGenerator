const Engineer = require("../library/engineer");

describe("engineer", () => {
  const engineer = new Engineer('Alex', '12345', 'test@email.com', 'test123');
  it("getName = name", () => {
    expect(engineer.getName()).toEqual('Alex');
  })
  it("getID = id", () => {
    expect(engineer.getId()).toEqual('12345');
  })
  it("getEmail = email", () => {
    expect(engineer.getEmail()).toEqual('test@email.com');
  })
  it("getGitHub = gitHub", () => {
    expect(engineer.getGitHub()).toEqual('test123');
  })    
});