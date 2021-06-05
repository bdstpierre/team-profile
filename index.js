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
    return inquirer.prompt([
        {
            type: 'list',
            name: 'build',
            message: 'Would you like to add a member to the team?  Select what type of member or Team Complete when you are finished:',
            choices: ['Engineer', 'Intern', 'Team Complete!']
        },
    ])
};

const addEngineer = () => {
    return inquirer.prompt([
        {

        },
    ])
};

const generateReadme = (answers) => {
switch (answers.license) {

};

return `# ${answers.projectName}
## Description
${badge}\n
${answers.description}\n
![Screenshot of the apllication or project](${answers.screenshot})
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Credits
${answers.credits}
## Questions
If you have any questions you can contact the author through his github user profile: https://github.com/${answers.gitName}
or by sending an email to ${answers.email}
## License
${licenseText}
## Features
${answers.features}
## How to Contribute
${answers.contribute}
## Tests
${answers.tests}
`;
};

// const init = () => {
//     promptManager()
//     .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
//     .then(() => console.log('Successfully wrote to README.md'))
//     .catch((err) => console.error(err));
// };

const init = () => {
    promptManager()
    .then((answers) => {
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        console.log(employees);
        buildTeam()
            .then((answers) => {
                switch(answers.build) {
                    case 'Engineer':
                        console.log('Adding an engineer');
                        //addEngineer()
                        break;

                    case 'Intern':
                        console.log('Adding an intern');
                        //addIntern();
                        break;

                    default:
                        console.log('Team Complete!');
                        //createHTML();
                }
            })
        })
    .catch((err) => console.error(err));
};

init();