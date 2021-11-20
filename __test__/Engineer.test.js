
const Engineer = require('../lib/Engineer.js');
const employeeInst = new Engineer(name='Data', id=2, email='Data@myfirm.com', role='Engineer', github='data');


test('creates a new Engineer via constructor', () => {
   
    expect(employeeInst.github).toEqual('data');
    expect(employeeInst.name).toBe('Data');
    expect(employeeInst.id).toEqual(2);
    expect(employeeInst.email).toEqual('Data@myfirm.com');
    expect(employeeInst.role).toEqual('Engineer');
  

});

test("gets Engineer name, id, email, role, github", () => {
   
    expect(employeeInst.getName()).toEqual(expect.stringContaining(employeeInst.name));
   
    // test the id value returned from the function against the truth value
    expect(employeeInst.getId().toString()).toEqual(expect.stringContaining(employeeInst.id.toString()));

    expect(employeeInst.getEmail()).toEqual(expect.stringContaining(employeeInst.email));
    expect(employeeInst.getRole()).toEqual(expect.stringContaining(employeeInst.role));
    expect(employeeInst.getGithub()).toEqual(expect.stringContaining(employeeInst.github));
});

test("gets Engineer info as an object", () => {
    
    expect(employeeInst.getInfo()).toHaveProperty('name');
    expect(employeeInst.getInfo()).toHaveProperty('id');
    expect(employeeInst.getInfo()).toHaveProperty('email');
    expect(employeeInst.getInfo()).toHaveProperty('role');
    expect(employeeInst.getInfo()).toHaveProperty('github');
    
});
