import createHTML from './lib/createHTML.js';
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

const employees = [];

employees.push(new Manager('Barry','1','barry@stpierre.com','4'));
employees.push(new Engineer('Hunter', '2', 'hunter@stpierre.com', 'hdstpierre'));
employees.push(new Intern('Emma', '3', 'emma@stpierre.com', 'Michigan'));

console.log(employees);

createHTML(employees);