// {"varName": "str_gitUserName", "question":"Enter GitHub username? ","type": "input"},
// {"varName":"str_license", "question":"Enter a License ","type": "list", choices: ['Apache', 'BSD', 'GNU', 'MIT']},

class Question {
    constructor(name = '', question='',type='') {
      this.name = name;
      this.question = question;
      this.type = type;
    }
    getName(){
      
      return this.name
    }
    getSingleQuestion(){
      
      return this.question
    }
    getType(){
      
      return this.type
    }
    
    getQuestion(){
      return{
        name:this.getName(),
        question:this.getSingleQuestion(),
        type:this.getType()
      }
    }

    stringIfyQuestion(){
        return JSON.stringify(this.getQuestion())
    }
  
    
  }
  
  module.exports = Question;
  