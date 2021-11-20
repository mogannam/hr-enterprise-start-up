const Employee = require('../lib/Employee.js');

test('creates a new Employee via constructor', () => {
  const employeeInst = new Employee(name='Red', id=0, email='Red@myfirm.com', role = 'Employee');

  expect(employeeInst.name).toBe('Red');
  expect(employeeInst.id).toEqual(0);
  expect(employeeInst.email).toEqual('Red@myfirm.com');
  expect(employeeInst.role).toEqual('Employee');

});

test("gets Employees name, id, email, role", () => {
    const employeeInst = new Employee(name='Red', id=0, email='Red@myfirm.com', role = 'Employee');
    expect(employeeInst.getName()).toEqual(expect.stringContaining(employeeInst.name));
   
    //call getId, and return a string
    const str_id = employeeInst.getId().toString()
    // get the actual id value directly from the object
    const str_idTruth = expect.stringContaining(employeeInst.id.toString())
    // test the id value returned from the function against the truth value
    expect(str_id).toEqual(str_idTruth);

    expect(employeeInst.getEmail()).toEqual(expect.stringContaining(employeeInst.email));
    expect(employeeInst.getRole()).toEqual(expect.stringContaining(employeeInst.role));
    //expect(employeeInst.getRole()).toEqual(expect.stringContaining("dog")); // a test hardcoded to fail on purpose
});

test("gets Employees info as an object", () => {
    const employeeInst = new Employee(name='Red', id=0, email='Red@myfirm.com', role = 'Employee');
    
  expect(employeeInst.getInfo()).toHaveProperty('name');
  expect(employeeInst.getInfo()).toHaveProperty('id');
  expect(employeeInst.getInfo()).toHaveProperty('email');
  expect(employeeInst.getInfo()).toHaveProperty('role');
  
});
