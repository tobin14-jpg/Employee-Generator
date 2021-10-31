const Intern = require('../src/Intern.js');

function makeIntern(
    name = "Test Name",
    id = 123,
    email = "test@email.com",
    school = "school"
){

    return new Intern(name, id, email, school);
}

describe("Test intern class", () => {
    it("Should have the correct data options", () => {

        const name = "Test Name";
        const id = 123;
        const email = 'test@email.com';
        const school = "school";

        const intern = makeIntern(name, id, email, school);

        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);


    });

    it("Should return Intern when getRole() is called", () => {
        
        const expected = "Intern";
        const intern = makeIntern();
        expect(intern.getRole()).toEqual(expected);
    });

    it("Should return email when getEmail() is called", () => {
        
        const expected = "test@email.com";
        const intern = makeIntern(123, 234, expected, 789);
        expect(intern.getEmail()).toEqual(expected);
    });

    it("Should return name when getName() is called", () => {
        
        const expected = "Intern";
        const intern = makeIntern(expected, 234, 567, 789);
        expect(intern.getRole()).toEqual(expected);
    });

    it("Should return an ID when getId()) is called", () => {
        
        const expected = "123";
        const intern = makeIntern(123, expected, 567, 789);
        expect(intern.getId()).toEqual(expected);
    });

    it("Should return school when getGithub() is called", () => {

        const expected = "school";
        const intern = makeIntern(123, 234, 567, expected);
        expect(intern.getSchool()).toEqual(expected);

    });
})