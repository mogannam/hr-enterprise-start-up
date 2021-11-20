const Manager = require('./lib/Manager');
let int_totalEmployee = 0;
const employeeInst = new Manager(name='Picard', id=1, email='picard@myfirm.com', role='Manager', officeNumber=33);

console.log(employeeInst.getInfo().officeNumber)