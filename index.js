// const Manager = require('./lib/Manager');
// let int_totalEmployee = 0;
// const employeeManager = new Manager(name='Picard', id=1, email='picard@myfirm.com', role='Manager', officeNumber=33);

// console.log(employeeManager.getInfo().officeNumber)

// const Question = require('./lib/Question');
// const questionInst = new Question(varName = 'name', question='What is the Manager Name? ',type='input')
// console.log(questionInst.getQuestion())
// console.log(questionInst.stringIfyQuestion())

// const QuestionList = require('./lib/QuestionList');
// const questionListInst = new QuestionList(varName = 'Employee', question='Which of the following would you like to add?',type='list', choices=['Manager','Engineer','Intern'])
// console.log(questionListInst.getQuestion())
// console.log(questionListInst.stringIfyQuestion())


// const EmployeeQuestions = require('./lib/EmployeeQuestions');
// const EmployeeQuestionsInst = new EmployeeQuestions(role='Manager')
// console.log('====')
// console.log(EmployeeQuestionsInst.getQuestions())

const ManagerQuestions = require('./lib/ManagerQuestions');
const ManagerQuestionsInst = new ManagerQuestions(role='Manager')
console.log('111')
console.log(ManagerQuestionsInst.getQuestions())

const EngineerQuestions = require('./lib/EngineerQuestions');
const EngineerQuestionsInst = new EngineerQuestions(role='Engineer')
console.log('222')
console.log(EngineerQuestionsInst.getQuestions())

const InternQuestions = require('./lib/InternQuestions');
const InternQuestionsInst = new InternQuestions(role='Intern')
console.log('3333')
console.log(InternQuestionsInst.getQuestions())


