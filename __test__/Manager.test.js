
const Manager = require('../lib/Manager.js');
const employeeInst = new Manager(name='Picard', id=1, email='picard@myfirm.com', role='Manager', officeNumber=33);


test('creates a new Manager via constructor', () => {
   
    expect(employeeInst.officeNumber).toEqual(33);
    expect(employeeInst.name).toBe('Picard');
    expect(employeeInst.id).toEqual(1);
    expect(employeeInst.email).toEqual('picard@myfirm.com');
    expect(employeeInst.role).toEqual('Manager');
  

});

test("gets Managers name, id, email, role, officeNumber", () => {
   
    expect(employeeInst.getName()).toEqual(expect.stringContaining(employeeInst.name));
   
    
    // test the id value returned from the function against the truth value
    expect(employeeInst.getId().toString()).toEqual(expect.stringContaining(employeeInst.id.toString()));

    expect(employeeInst.getEmail()).toEqual(expect.stringContaining(employeeInst.email));
    expect(employeeInst.getRole()).toEqual(expect.stringContaining(employeeInst.role));
    expect(employeeInst.getOfficeNumber()).toEqual(employeeInst.officeNumber);
    //expect(employeeInst.getRole()).toEqual(expect.stringContaining("dog")); // a test hardcoded to fail on purpose
});

test("gets Manager info as an object", () => {
    
    expect(employeeInst.getInfo()).toHaveProperty('name');
    expect(employeeInst.getInfo()).toHaveProperty('id');
    expect(employeeInst.getInfo()).toHaveProperty('email');
    expect(employeeInst.getInfo()).toHaveProperty('role');
    expect(employeeInst.getInfo()).toHaveProperty('officeNumber');
    
});
