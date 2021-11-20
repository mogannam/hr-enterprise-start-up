
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name='',name= '', id=-1, email='',school='') {
    super(name); // super used to grab properity
    super(id); // from parent class
    super(email);
    this.role = 'Intern';
    this.school = school;

  }

getSchool(){
    return this.school;
}
getRole(){
    return 'Intern';
}

getInfo(){
  return{
    name:this.getName(),
    id:this.getId() ,
    email:this.getEmail(),
    role:this.getRole(),
    school:this.getSchool(),
  }
}

}

module.exports = Intern;
