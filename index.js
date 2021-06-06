const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');
//const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createHTML = require('./lib/createHTML');

// const writeFileAsync = util.promisify(fs.writeFile);

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

// The buildTeam function prompts the user if they want to add team memebers to their team
const buildTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'build',
            message: 'Would you like to add a member to the team?  Select what type of member or Team Complete when you are finished:',
            choices: ['Engineer', 'Intern', 'Team Complete!']
        },
    ])
    // Check the answer for the adding team member question and call the appropriate prompt function
    .then((answers) => {
        switch(answers.build) {
            case 'Engineer':
                console.log('Adding an engineer');
                addEngineer()
                // Add the new engineer object to the employees array
                .then((answers) => {
                    employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                    console.log(employees);
                    return buildTeam();
                });
                break;

            case 'Intern':
                console.log('Adding an intern');
                addIntern()
                // Add the new intern object to the employees array
                .then((answers) => {
                    employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                    console.log(employees);
                    return buildTeam();
                });
                break;

            default:
                console.log('Team Complete!');
                console.log(employees);
                console.log(typeof employees);
                //createHTML(employees);
        }
    })
};

// The addEngineer function prompts for the info for engineer employees
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee\'s name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee\'s ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee\'s email address:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter employee\'s github username:',
        },    
    ])
};

// The addIntern function prompts for the info for intern employees
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee\'s name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee\'s ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee\'s email address:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter employee\'s school:',
        },    
    ])
};


// The init function asks for info on the manager and then calls the function to build the team
const init = () => {
    promptManager()
    // Add the manager object to the employees array
    .then((answers) => {
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        console.log(employees);
        buildTeam();
        })
    .catch((err) => console.error(err));
};

// Kick off processing with the init() function
init();