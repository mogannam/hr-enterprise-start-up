
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name= '', id=-1, email= '',officeNumber=-1) {
    super(name); // super used to grab properity
    super(id); // from parent class
    super(email);
    this.role = 'Manager'
    this.officeNumber = officeNumber
    
  }
  
  getRole(){
      return "Manager"
  }
  getOfficeNumber(){
    return this.officeNumber
  }

  getInfo(){
    return{
      name:this.getName(),
      id:this.getId() ,
      email:this.getEmail,
      role:this.getRole,
      officeNumber:this.getOfficeNumber()
    }
  }

}

module.exports = Manager;
