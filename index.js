// const Manager = require('./lib/Manager');
// let int_totalEmployee = 0;
// const employeeManager = new Manager(name='Picard', id=1, email='picard@myfirm.com', role='Manager', officeNumber=33);
const fs = require('fs');
const inquirer = require("inquirer");
const QuestionList = require('./lib/QuestionList');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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


// const ManagerQuestionsInst = new ManagerQuestions(role='Manager')
// console.log('111')
// //console.log(ManagerQuestionsInst.getQuestions())
// console.log(ManagerQuestionsInst.getInquirerQuestions())

//console.log("*****")
//console.log(ManagerQuestionsInst.getQuestions()[0].getQuestion())


// const EngineerQuestionsInst = new EngineerQuestions(role='Engineer')
// console.log('222')
// console.log(EngineerQuestionsInst.getQuestions())


// const InternQuestionsInst = new InternQuestions(role='Intern')
// console.log('3333')
// console.log(InternQuestionsInst.getQuestions())

// inquirer.prompt(ManagerQuestionsInst.getInquirerQuestions()).then(answers => {
//     // do work with answers
//     console.log(answers)
//     inquirer.prompt(new EngineerQuestions(role='Engineer').getQuestions())

// })

//inquirer.prompt(new InternQuestions(role='Intern').getQuestions())

const myTeam = [];
let global_id = 0;
const outPath = "dist/index.html";

const writeHtmlFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile(outPath, fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };


  const generateHTML = arrEmployees => {

    const head = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`
    const bodyOpen = `<body class=""> <div class="col d-flex justify-content-center">`
    const bodyClose = `</div></body>`
    const jumbotron = `<header class="jumbotron"> <h1 class="text-center"> My Team</h1> </header>`
    let allCards = ``;
    arrEmployees.forEach(aEmployee => {
        // open a card
        let icon =``;
        switch(aEmployee.role){
            case'Manager':
                icon = `<img src="../src/cup.svg" class="bi bi-cup"></img>`
                break;
            case'Engineer':
                icon = `<img src="../src/eyeglasses.svg" class="bi bi-eyeglasses"></img>`
                break;
            default:
                icon = `<img src="../src/book-half.svg" class="bi bi-book-half"></img>`
                break;
        }

        let aCard = `
            <div class="card text-center " style="width: 18rem;">
                <div class="card-header bg-primary">
                    <h5 class="card-title">${aEmployee.name}</h5>
                    <p>${icon}${aEmployee.role}</p>
                </div> 
                <div class="card-body">`
        aCard += `<ul class="list-group list-group-flush">`
        for (const key in aEmployee) {
            if (Object.hasOwnProperty.call(aEmployee, key)) {
                const element = aEmployee[key];
                switch(key){
                    case'name':
                        break;
                    case'role':
                        break;
                    case'id':
                        aCard += `<li class="list-group-item">ID: ${element}</li>`
                        break
                    case'email':
                        aCard += `<li class="list-group-item"> Email: <a target="_blank" href="mailto: ${element}">${element}</a></li>`
                        break;
                    case'officeNumber':
                        aCard += `<li class="list-group-item">Office Number: ${element}</li>`;
                        break;
                    case'github':
                        aCard += `<li class="list-group-item"> GitHub: <a target="_blank" href="https://github.com/${element}">${element}</a></li>`;
                        break;
                    case'school':
                        aCard += `<li class="list-group-item">School: ${element}</li>`
                        break;
                    default:
                        aCard += `<li class="list-group-item">${key} ${element}</li>`
                        break;
                }
            }
        }

        // close the card
        aCard += `</ul></div></div>`
        allCards += aCard  
    });
    
  
    // bundle up all the individual answers into one string, then write the string to a file
    const writeToFile = head+jumbotron+bodyOpen+allCards+bodyClose
    writeHtmlFile(writeToFile)
  
  }


// from answers get, name, email, github/officenumber/school
// from user choice get role
//const employeeInst = new Manager(name='Data', global_id, email='Data@myfirm.com', role='Engineer', github='data');

const pushTeamMember = async (backStoryQuest, userChoice) =>{
    //todo: switch case to fine tune user choice
   
    //let backStoryQuest = "";
    //backStoryQuest = new EngineerQuestions(role='Engineer')
    //let teamMemberConstructor = "" // todo update constructor function in switch
    //console.log("in pushTeamMember")
    //console.log(backStoryQuest.getInquirerQuestions())
    global_id++;
    await inquirer.prompt(backStoryQuest.getInquirerQuestions()).then( async answers =>{
        // To Do call teamMemberConstructor
        //console.log(answers)
        switch (userChoice){
            case "Manager":
                //todo call manager constructor
                await myTeam.push(new Manager(answers.name, id=global_id, answers.email,role=userChoice,answers.officeNumber))
                break;
            case "Engineer":
                //todo engineer constructor
                await myTeam.push(new Engineer(answers.name, id=global_id, answers.email,role=userChoice,answers.github))
                break;
            case "Intern":
                //todo intern constructor
                await myTeam.push(new Intern(answers.name, id=global_id, answers.email,role=userChoice,answers.school))
                break;
            default:
                console.log("somethign went wrong adding the team member!")
                break;
        

        }
        await console.log("done pushing team member")
        await generateHTML(myTeam);
         
    })
    //console.log("exiting pushTeamMember")
    //await console.log(myTeam)

}



const addTeamMember = async() =>  {
    // would you like to add a team member
    // Choices : Done, Manager, Engineer, Intern
    // return: true or false
    //let keepGoing = true;
    const choices = ['Done', 'Manager', 'Engineer', 'Intern']
    const growTeamQuest = new QuestionList("userChoice","Which teammember should we add? ", 'list', choices)
    //console.log(growTeamQuest.getQuestion())
    inquirer.prompt(growTeamQuest.getQuestion()).then(async answers=>{
        //console.log(answers)
        switch(answers.userChoice){
            case "Done":
                return;
                break;
            case "Manager":
                // a set of questions, and a user choice to create a team member
                await pushTeamMember(new ManagerQuestions(role='Manager'),answers.userChoice )
                await addTeamMember()
                break;
            case "Engineer":
                // ToDo 
                await pushTeamMember(new EngineerQuestions(role='Engineer'), answers.userChoice )
                await addTeamMember()
                break;
            case "Intern":
                // ToDo 
                await pushTeamMember(new InternQuestions(role='Intern'), answers.userChoice )
                await addTeamMember()
                break;
            default:
                console.log("\n Sorry, something went wrong choose again. \n")
                await addTeamMember()
                break;
        }
        
        return;
    })
    
    
}


console.log("Let's Build your team! \n \n")

const init =  () =>{
     addTeamMember();
}


//console.log('Before')
init()




//console.log(`Local keep gpoing ${keepGoing}`)





