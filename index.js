const Manager = require('./lib/Manager');
let int_totalEmployee = 0;
const employeeInst = new Manager(name='Picard', id=1, email='picard@myfirm.com', role='Manager', officeNumber=33);

console.log(employeeInst.getInfo().officeNumber)

const Question = require('./lib/Question');
const questionInst = new Question(varName = 'name', question='What is the Manager Name? ',type='input')
console.log(questionInst.getInfo())
console.log(questionInst.stringIfyQuestion())

const QuestionList = require('./lib/QuestionList');
const questionListInst = new QuestionList(varName = 'Employee', question='Which of the following would you like to add?',type='list', choices=['Manager','Engineer','Intern'])
console.log(questionListInst.getInfo())
console.log(questionListInst.stringIfyQuestion())