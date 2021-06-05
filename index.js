const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const writeFileAsync = util.promisify(fs.writeFile);

let employees = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
        },
    ])
};

const buildTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'build',
            message: 'Would you like to add a member to the team?  Select what type of member or Team Complete when you are finished:',
            choices: ['Engineer', 'Intern', 'Team Complete!']
        },
    ])
    .then((answers) => {
        switch(answers.build) {
            case 'Engineer':
                console.log('Adding an engineer');
                addEngineer()
                .then((answers) => {
                    employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                    console.log(employees);
                    return buildTeam();
                });
                break;

            case 'Intern':
                console.log('Adding an intern');
                addIntern()
                .then((answers) => {
                    employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                    console.log(employees);
                    return buildTeam();
                });
                break;

            default:
                console.log('Team Complete!');
                //createHTML();
        }
})};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter employee github username:',
        },    
    ])
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter employee\'s school:',
        },    
    ])
};



const init = () => {
    promptManager()
    .then((answers) => {
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        console.log(employees);
        buildTeam();
        })
    .catch((err) => console.error(err));
};

init();