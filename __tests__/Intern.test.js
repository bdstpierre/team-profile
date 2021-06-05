const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getName", () => {
        it("Should return the employee name", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const school = "Michigan State University";
    
            const result = new Intern(eName, id, email, school);
    
            expect(result.getName()).toEqual(eName);
        });
    });
    describe("getID", () => {
        it("Should return the employee ID", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const school = "Michigan State University";
    
            const result = new Intern(eName, id, email, school);
    
            expect(result.getID()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("Should return the employee email", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const school = "Michigan State University";
    
            const result = new Intern(eName, id, email, school);

            expect(result.getEmail()).toEqual(email);
        });
    });
    describe("getSchool", () => {
        it("Should return the employee school", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const school = "Michigan State University";
    
            const result = new Intern(eName, id, email, school);
    
            expect(result.getSchool()).toEqual("Michigan State University");
        });
    });
    describe("getRole", () => {
        it("Should return the intern role", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const school = "Michigan State University";
        
            const result = new Intern(eName, id, email, school);
        
            expect(result.getRole()).toEqual("Intern");
        });
    });
});