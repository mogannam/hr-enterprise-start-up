
const Intern = require('../lib/Intern.js');
const employeeInst = new Intern(name='Wesley', id=3, email='wesley@myfirm.com', role='Intern', school='Starfleet Academy');


test('creates a new Intern via constructor', () => {
   
    expect(employeeInst.school).toEqual('Starfleet Academy');
    expect(employeeInst.name).toBe('Wesley');
    expect(employeeInst.id).toEqual(3);
    expect(employeeInst.email).toEqual('wesley@myfirm.com');
    expect(employeeInst.role).toEqual('Intern');
  

});

test("gets Intern name, id, email, role, school", () => {
   
    expect(employeeInst.getName()).toEqual(expect.stringContaining(employeeInst.name));
   
    // test the id value returned from the function against the truth value
    expect(employeeInst.getId().toString()).toEqual(expect.stringContaining(employeeInst.id.toString()));

    expect(employeeInst.getEmail()).toEqual(expect.stringContaining(employeeInst.email));
    expect(employeeInst.getRole()).toEqual(expect.stringContaining(employeeInst.role));
    expect(employeeInst.getSchool()).toEqual(expect.stringContaining(employeeInst.school));
});

test("gets Intern info as an object", () => {
    
    expect(employeeInst.getInfo()).toHaveProperty('name');
    expect(employeeInst.getInfo()).toHaveProperty('id');
    expect(employeeInst.getInfo()).toHaveProperty('email');
    expect(employeeInst.getInfo()).toHaveProperty('role');
    expect(employeeInst.getInfo()).toHaveProperty('school');
    
});
