// {"varName": "str_gitUserName", "question":"Enter GitHub username? ","type": "input"},
// {"varName":"str_license", "question":"Enter a License ","type": "list", choices: ['Apache', 'BSD', 'GNU', 'MIT']},
const Question = require('./Question');

class QuestionList extends Question {
    constructor(varName, question,type) {
        super(varName, question,type)
        this.choices = choices;
    }
    getChoices(){
        return this.choices;
    }
    
    
    getInfo(){
        super.getInfo()
        return{
            varName:this.getVarName(),
            question:this.getQuestion(),
            type:this.getType(),
            choices:this.getChoices()
        }
    }
  
  }
  
  module.exports = QuestionList;
  