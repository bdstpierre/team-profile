const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email);
        this.github = github;
    }

    getGitHub() {
        return `https://github.com/${this.github}`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;