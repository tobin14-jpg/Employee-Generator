
const { it, expect } = require("@jest/globals")
const BaseEmployee = require("../employees/BaseEmployee")

function makeEmployee(id = 123, email = "blah@mail.com", name = "Maccas") {

    return new BaseEmployee(id, email, name);
}

describe("Test Base Employee", () => {
    
    it("should contain correct field", () => {

        const id = 123
        const email = "blah@mail.com"
        const name = "Maccas"

        const employee = makeEmployee(id, email, name)

        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
        expect(employee.name).toEqual(name);
    });

    it("should return Employee when getRole() is called", () => {
        const expected = "Employee";
        const employee = makeEmployee();
        expect(employee.getRole()).toEqual(expected);

    });

    it("should return email when getEmail() is called", () => {
        const expected = "Email";
        const employee = makeEmployee(123, expected);
        expect(employee.getEmail()).toEqual(expected);

    });

    it("should return Employee when getName() is called", () => {
        const expected = "Maccas";
        const employee = makeEmployee(123, "blah@mail.com", expected);
        expect(employee.getName()).toEqual(expected);

    });

    it("should return Employee when getId() is called", () => {
        const expected = 123;
        const employee = makeEmployee(expected);
        expect(employee.getId()).toEqual(expected);

    });
});