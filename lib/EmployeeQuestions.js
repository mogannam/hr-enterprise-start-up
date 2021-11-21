const Question = require('./Question');

class EmployeeQuestions {
    constructor(role='Employee',questions=[]) {
        this.role = role
        this.questions = [
            new Question(`name`, `What is the ${this.role}'s name? `,'input'),
            new Question(`email`, `What is the ${this.role}'s email? `,'input'),
           
        ];
    }
    
    getQuestions(){
        return this.questions
    }

  
  }
  
  module.exports = EmployeeQuestions;
