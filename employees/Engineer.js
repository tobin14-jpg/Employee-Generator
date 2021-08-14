const BaseEmployee = require('./BaseEmployee')

class Engineer extends BaseEmployee {
    constructor(id, name, email, gitHub) {
        super(id, name, email)

        this.gitHub = gitHub
    }
}

Engineer.prototype.getRole = function () {
    return 'Engineer'
}

Engineer.prototype.getGitHub = function () {
    return this.gitHub
}

module.exports = Engineer