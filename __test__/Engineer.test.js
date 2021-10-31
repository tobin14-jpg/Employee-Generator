const Employee = require('../src/Employee');

function makeEmployee(
    name = "TestName",
    id = 123,
    email = "test@email.com"
){

    return new Employee(name, id, email);
}

describe("Test employee class", () => {
    it("Should have the correct data options", () => {

        const name = "TestName";
        const id = 123;
        const email = "test@email.com";

        const employee = makeEmployee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);

    });

    it("Should return Employee when getRole() is called", () => {
        
        const expected = "Employee";
        const employee = makeEmployee();
        expect(employee.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const expected = "test@email.com";
        const employee = makeEmployee(123, 234, expected);
        expect(employee.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const expected = "Employee";
        const employee = makeEmployee(expected, 234, 567);
        expect(employee.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const expected = "123";
        const employee = makeEmployee(123, expected, 567);
        expect(employee.getId()).toEqual(expected);
    });
})