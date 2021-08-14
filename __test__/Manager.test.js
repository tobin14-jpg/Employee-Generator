const { it, expect } = require("@jest/globals")
const Manager = require("../employees/Manager")

function makeManager(id = 123, email = "blah@mail.com", name = "Maccas") {

    return new Manager(id, email, name);
}

describe("Test Manager", () => {
    
    it("should contain correct field", () => {

        const id = 123
        const email = "manager@mail.com"
        const name = "Maccas"

        const manager = makeManager(id, email, name)

        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.name).toEqual(name);
    });

    it("should return Manager when getRole() is called", () => {
        const expected = "Manager";
        const manager = makeManager();
        expect(manager.getRole()).toEqual(expected);

    });

    it("should return email when getEmail() is called", () => {
        const expected = "Email";
        const manager = makeManager(123, expected);
        expect(manager.getEmail()).toEqual(expected);

    });

    it("should return Manager when getName() is called", () => {
        const expected = "Maccas";
        const manager = makeManager(123, "blah@mail.com", expected);
        expect(manager.getName()).toEqual(expected);

    });

    it("should return ManagerBaseManager when getId() is called", () => {
        const expected = 123;
        const manager = makeManager(expected);
        expect(manager.getId()).toEqual(expected);

    });
});