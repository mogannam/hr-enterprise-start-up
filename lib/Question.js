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
    getQuestion(){
      
      return this.question
    }
    getType(){
      
      return this.type
    }
    
    getInfo(){
      return{
        varName:this.getVarName(),
        question:this.getQuestion(),
        type:this.getType()
      }
    }

    stringIfyQuestion(){
        return JSON.stringify(this.getInfo())
    }
  
    
  }
  
  module.exports = Question;
  