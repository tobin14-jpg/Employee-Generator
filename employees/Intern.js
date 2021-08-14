const BaseEmployee = require('./BaseEmployee')

class Intern extends BaseEmployee {
    constructor(id, name, email, school) {
        super(id, name, email)

        this.school = school;
    }
}

Intern.prototype.getRole = function () {
    return 'Intern';
}

BaseEmployee.prototype.getSchool = function () {
    return this.getSchool;
}

module.exports = Intern;