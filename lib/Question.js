// {"varName": "str_gitUserName", "question":"Enter GitHub username? ","type": "input"},
// {"varName":"str_license", "question":"Enter a License ","type": "list", choices: ['Apache', 'BSD', 'GNU', 'MIT']},

class Question {
    constructor(name = '', email='',role='Employee') {
      this.name = name;
      this.email = email;
      this.role = 'Employee';
    }
    getName(){
      
      return this.name
    }
    getId(){
      
      return this.id
    }
    getEmail(){
      
      return this.email
    }
    getRole(){
      
      return 'Employee'
    }

    getInfo(){
      return{
        name:this.getName(),
        id:this.getId() ,
        email:this.getEmail(),
        role:this.getRole()
      }
    }
  
    
  }
  
  module.exports = Question;
  