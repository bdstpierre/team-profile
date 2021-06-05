const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return the employee name", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const github = "frankenstein";
    
            const result = new Engineer(eName, id, email, github);
    
            expect(result.getName()).toEqual(eName);
        });
    });
    describe("getID", () => {
        it("Should return the employee ID", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const github = "frankenstein";
    
            const result = new Engineer(eName, id, email, github);
    
            expect(result.getID()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("Should return the employee email", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const github = "frankenstein";
    
            const result = new Engineer(eName, id, email, github);

            expect(result.getEmail()).toEqual(email);
        });
    });
    describe("getGitHub", () => {
        it("Should return the employee github URL", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const github = "frankenstein";
    
            const result = new Engineer(eName, id, email, github);
    
            expect(result.getGitHub()).toEqual("https://github.com/frankenstein");
        });
    });
    describe("getRole", () => {
        it("Should return the engineer role", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const github = "frankenstein";
        
            const result = new Engineer(eName, id, email, github);
        
            expect(result.getRole()).toEqual("Engineer");
        });
    });
});