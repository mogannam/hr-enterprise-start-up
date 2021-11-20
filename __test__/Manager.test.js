const Manager = require('../lib/Employee.js');

test('creates a new Manager via constructor', () => {
  const employeeInst = new Manager(name='Picard', id=1, email='picard@myfirm.com', officeNumber=33);

  expect(employeeInst.name).toBe('Picard');
  expect(employeeInst.id).toEqual(1);
  expect(employeeInst.email).toEqual('Picard@myfirm.com');
  expect(employeeInst.role).toEqual('Manager');
  expect(employeeInst.officeNumber).toEqual(33);

});

test("gets Managers name, id, email, role", () => {
    const employeeInst = new Employee(name='Red', id=0, email='Red@myfirm.com', role = 'Employee',officeNumber=33);
    expect(employeeInst.getName()).toEqual(expect.stringContaining(employeeInst.name));
    //call getId, and return a string
    const str_id = employeeInst.getId().toString()
    // get the actual id value directly from the object
    const str_idTruth = expect.stringContaining(employeeInst.id.toString())
    // test the id value returned from the function against the truth value
    expect(str_id).toEqual(str_idTruth);
});

test("gets Employees info as an object", () => {
    const employeeInst = new Employee(name='Red', id=0, email='Red@myfirm.com', role = 'Employee');
    
  expect(employeeInst.getInfo()).toHaveProperty('name');
  expect(employeeInst.getInfo()).toHaveProperty('id');
  expect(employeeInst.getInfo()).toHaveProperty('email');
  expect(employeeInst.getInfo()).toHaveProperty('role');
  
});
