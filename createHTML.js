const fs = require('fs');
const util = require('util');

// vvvvv Test code vvvvv

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

const employees = [];

employees.push(new Manager('Barry','1','barry@stpierre.com','4'));
employees.push(new Engineer('Hunter', '2', 'hunter@stpierre.com', 'hdstpierre'));
employees.push(new Intern('Emma', '3', 'emma@stpierre.com', 'Michigan'));

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
        htmlString += '<div class="row">\n';
        htmlString += '<div class="col-sm-6">\n';

        employees.forEach(element => {
            htmlString += '<div class="card" style="width: 18rem;">\n<div class="card-header">\n';
            htmlString += `${element.getName()}<br />${element.getRole()}\n`;
            htmlString += '</div>\n<ul class="list-group list-group-flush">\n';
            htmlString += `<li class="list-group-item">ID: ${element.getID()}</li>\n`;
            htmlString += `<li class="list-group-item">email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>\n`;

            switch(element.getRole()){
                case 'Manager':
                    uniqueString = `Office Number: ${element.getOfficeNumber()}`;
                    htmlString += `<li class="list-group-item">${uniqueString}</li>\n`
                    break;

                case 'Engineer':
                    uniqueString = `GitHub: <a href='${element.getGitHub()}'>${element.github}</a>`;
                    htmlString += `<li class="list-group-item">${uniqueString}</li>\n`
                    break;

                case 'Intern':
                    uniqueString = `School: ${element.getSchool()}`;
                    htmlString += `<li class="list-group-item">${uniqueString}</li>\n`
                    break;
            };
            htmlString += '</div>\n';
        });
        htmlString += '</div>\n</div>\n';

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


createHTML(employees);
