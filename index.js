const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const createHTML = (employees) => {

    // Read the txt file that has the top half of the html file
    fs.readFile('./src/htmlTop.txt', 'utf8', (error, data) => {
        if (error) {
            throw error;
        }
        htmlString = data;

        // Build the bootstrap card data
        employees.forEach(element => {
            switch(element.getRole()){
                case 'Manager':
                    htmlString += `	<div class="card shadow col-sm-6 col-md-4 col-lg-3 m-4">
                    <div class="card-header bg-success text-white">
                        <b>${element.getName()}</b><br />Manager
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 1</li>
                        <li class="list-group-item">email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>
                    </ul>
                </div>
    `;
                    break;

                case 'Engineer':
                    htmlString += `			<div class="card shadow col-sm-6 col-md-4 col-lg-3 m-4">
                    <div class="card-header bg-primary text-white">
                        <b>${element.getName()}</b><br />Engineer
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 2</li>
                        <li class="list-group-item">email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href='${element.getGitHub()}'>${element.github}</a></li>
                    </ul>
                </div>
    `;
                    break;

                case 'Intern':
                    htmlString += `			<div class="card shadow col-sm-6 col-md-4 col-lg-3 m-4">
                    <div class="card-header bg-secondary text-white">
                        <b>${element.getName()}</b><br />Intern
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 3</li>
                        <li class="list-group-item">email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                        <li class="list-group-item">School: ${element.getSchool()}</li>
                    </ul>
                </div>
    `;
                    break;
            };
        });

        fs.readFile('./src/htmlBottom.txt', 'utf8', (error, data) => {
            if (error) {
                throw error;
            }
            htmlString += data;

            fs.writeFile('./dist/index.html', htmlString, (err) =>
  err ? console.error(err) : console.log('Success!'));

        })
    });

};

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
            validate: function(id)
            {
                return /^[0-9]+$/.test(id) ? true : `You entered ${id}, Please enter a number`;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: function(email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) ? true : `You entered ${email}, Please enter a valid email address`;
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
            validate: function(officeNumber)
            {
                return /^[0-9]+$/.test(officeNumber) ? true : `You entered ${officeNumber}, Please enter a number`;
            },
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
                addEngineer()
                // Add the new engineer object to the employees array
                .then((answers) => {
                    employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                    console.log(`Employee ${answers.name} has been added to the team!\n`);
                    return buildTeam();
                });
                break;

            case 'Intern':
                addIntern()
                // Add the new intern object to the employees array
                .then((answers) => {
                    employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                    console.log(`Employee ${answers.name} has been added to the team!\n`);
                    return buildTeam();
                });
                break;

            default:
                createHTML(employees);
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
            validate: function(id)
            {
                return /^[0-9]+$/.test(id) ? true : `You entered ${id}, Please enter a number`;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee\'s email address:',
            validate: function(email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) ? true : `You entered ${email}, Please enter a valid email address`;
            },
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
            validate: function(id)
            {
                return /^[0-9]+$/.test(id) ? true : `You entered ${id}, Please enter a number`;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee\'s email address:',
            validate: function(email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) ? true : `You entered ${email}, Please enter a valid email address`;
            },
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
        console.log(`Employee ${answers.name} has been added to the team!\n`);
        buildTeam();
        })
    .catch((err) => console.error(err));
};

// Kick off processing with the init() function
init();