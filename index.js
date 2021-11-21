// const Manager = require('./lib/Manager');
// let int_totalEmployee = 0;
// const employeeManager = new Manager(name='Picard', id=1, email='picard@myfirm.com', role='Manager', officeNumber=33);

const inquirer = require("inquirer");
const EngineerQuestions = require('./lib/EngineerQuestions');
const ManagerQuestions = require('./lib/ManagerQuestions');
const InternQuestions = require('./lib/InternQuestions');

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


const ManagerQuestionsInst = new ManagerQuestions(role='Manager')
console.log('111')
//console.log(ManagerQuestionsInst.getQuestions())
console.log(ManagerQuestionsInst.getInquirerQuestions())

//console.log("*****")
//console.log(ManagerQuestionsInst.getQuestions()[0].getQuestion())


// const EngineerQuestionsInst = new EngineerQuestions(role='Engineer')
// console.log('222')
// console.log(EngineerQuestionsInst.getQuestions())


// const InternQuestionsInst = new InternQuestions(role='Intern')
// console.log('3333')
// console.log(InternQuestionsInst.getQuestions())

inquirer.prompt(ManagerQuestionsInst.getInquirerQuestions())
inquirer.prompt(new EngineerQuestions(role='Engineer').getQuestions())
//inquirer.prompt(new InternQuestions(role='Intern').getQuestions())


