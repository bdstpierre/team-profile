const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("Should return the employee name", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
    
            const result = new Employee(eName, id, email);
    
            expect(result.getName()).toEqual(eName);
        });
      });
      describe("getID", () => {
        it("Should return the employee ID", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
    
            const result = new Employee(eName, id, email);
    
            expect(result.getID()).toEqual(id);
        });
      });
      describe("getEmail", () => {
        it("Should return the employee email", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
    
            const result = new Employee(eName, id, email);

            expect(result.getEmail()).toEqual(email);
        });
      });
      describe("getRole", () => {
        it("Should return the employee role", () => {
            const eName = "Bob Johnson";
            const id = "12";
            const email = "bob@johnson.com";
    
            const result = new Employee(eName, id, email);
    
            expect(result.getRole()).toEqual("Employee");
        });
      });
    });