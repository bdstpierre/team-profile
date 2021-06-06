const fs = require('fs');
const util = require('util');

// vvvvv Test code vvvvv

// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern'); 

// const employees = [];

// employees.push(new Manager('Barry','1','barry@stpierre.com','4'));
// employees.push(new Engineer('Hunter', '2', 'hunter@stpierre.com', 'hdstpierre'));
// employees.push(new Intern('Emma', '3', 'emma@stpierre.com', 'Michigan'));

// ^^^^ Test Code ^^^^^^


// const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);

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
                    htmlString += `			<div class="card col-sm-6 col-md-4 col-lg-3">
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
                    htmlString += `			<div class="card col-sm-6 col-md-4 col-lg-3">
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
                    htmlString += `			<div class="card col-sm-6 col-md-4 col-lg-3">
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


//createHTML(employees);

module.exports = createHTML;