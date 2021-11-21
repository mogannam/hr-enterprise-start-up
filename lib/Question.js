// {"varName": "str_gitUserName", "question":"Enter GitHub username? ","type": "input"},
// {"varName":"str_license", "question":"Enter a License ","type": "list", choices: ['Apache', 'BSD', 'GNU', 'MIT']},

class Question {
    constructor(varName = '', question='',type='') {
      this.varName = varName;
      this.question = question;
      this.type = type;
    }
    getVarName(){
      
      return this.varName
    }
    getSingleQuestion(){
      
      return this.question
    }
    getType(){
      
      return this.type
    }
    
    getQuestion(){
      return{
        varName:this.getVarName(),
        question:this.getSingleQuestion(),
        type:this.getType()
      }
    }

    stringIfyQuestion(){
        return JSON.stringify(this.getQuestion())
    }
  
    
  }
  
  module.exports = Question;
  