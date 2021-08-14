const BaseEmployee = require('./BaseEmployee')

class Manager extends BaseEmployee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)

        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getRole = function () {
    return 'Manager';
}

BaseEmployee.prototype.getOfficeNumber = function () {
    return this.getOfficeNumber;
}

module.exports = Manager;