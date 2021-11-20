
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name= '', id=-1, email= '', gitHub='') {
    super(name); // super used to grab properity
    super(id); // from parent class
    super(email);
    this.role = "Engineer";
    this.gitHub = gitHub;

  }

  getGithub(){
      return this.gitHub
  }
  getRole(){
      return "Engineer"
  }
  getInfo(){
    return{
      name:this.getName(),
      id:this.getId() ,
      email:this.getEmail(),
      role:this.getRole(),
      gitHub:this.getGithub(),
    }
  }
  

 
}

module.exports = Engineer;
