const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

    Intern.prototype.getSchool = function() {
        return this.school;
    }

    Employee.prototype.getRole = function() {
        return "Intern";
    }

module.exports = Intern;