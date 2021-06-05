const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getName", () => {
        it("Should return the employee name", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const officeNumber = "420";
    
            const result = new Manager(eName, id, email, officeNumber);
    
            expect(result.getName()).toEqual(eName);
        });
    });
    describe("getID", () => {
        it("Should return the employee ID", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const officeNumber = "420";
    
            const result = new Manager(eName, id, email, officeNumber);
    
            expect(result.getID()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("Should return the employee email", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const officeNumber = "420";
    
            const result = new Manager(eName, id, email, officeNumber);

            expect(result.getEmail()).toEqual(email);
        });
    });
    describe("getOffice", () => {
        it("Should return the employee office number", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const officeNumber = "420";
    
            const result = new Manager(eName, id, email, officeNumber);
    
            expect(result.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    describe("getRole", () => {
        it("Should return the manager role", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
            const officeNumber = "420";
        
            const result = new Manager(eName, id, email, officeNumber);
        
            expect(result.getRole()).toEqual("Manager");
        });
    });
});