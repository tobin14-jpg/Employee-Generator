const { it, expect } = require("@jest/globals")
const Intern = require("../employees/Intern")

function makeIntern(id = 123, email = "blah@mail.com", name = "Maccas", school = "Highschool") {

    return new Intern(id, email, name, school);
}

describe("Test Intern", () => {
    
    it("should contain correct field", () => {

        const id = 123
        const email = "intern@mail.com"
        const name = "Maccas"
        const school = "Highschool"

        const intern = makeIntern(id, email, name, school)

        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.name).toEqual(name);
        expect(intern.school).toEqual(school);
    });

    it("should return Intern when getRole() is called", () => {
        const expected = "Intern";
        const intern = makeIntern();
        expect(intern.getRole()).toEqual(expected);

    });

    it("should return email when getEmail() is called", () => {
        const expected = "Email";
        const intern = makeIntern(123, expected);
        expect(intern.getEmail()).toEqual(expected);

    });

    it("should return name when getName() is called", () => {
        const expected = "Maccas";
        const intern = makeIntern(123, "blah@mail.com", expected);
        expect(intern.getName()).toEqual(expected);

    });

    it("should return Intern when getId() is called", () => {
        const expected = 123;
        const intern = makeIntern(expected);
        expect(intern.getId()).toEqual(expected);

    });
});