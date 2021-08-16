const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./employees/Manager');
const Engineer = require('./employees/Engineer');
const Intern = require('./employees/Intern');
const genHTML = require('./lib/genHTML');

const employees = [];


function main() {
    return askForEmployee("Manager")
    .then((answers) => {
        employees.push(new Manager(...Object.values(answers)));
    })
    .then(() => {
        askForRole()
    })
    .catch((err) => {
        console.log(err);
    });
}

function askForEmployee(type){
    const questions = [
        {
            type: "input",
            message: `What is this ${type}'s name?`,
            name: "name",

        },
        {
            type: "input",
            message: `What is this ${type}'s ID number?`,
            name: "id",

        },
        {
            type: "input",
            message: `What is this ${type}'s E-mail address?`,
            name: "email",

        },
    ];

    switch(type) {
        case "Manager":
            questions.push({
                type: "input",
                message: `What is this ${type}'s office number?`,
                name: "officeNumber",
            })
            break;

        case "Engineer":
            questions.push({
                type: "input",
                message: `What is this ${type}'s Github name?`,
                name: "github",
            })
            break;
        
        case "Intern":
            questions.push({
                type: "input",
                message: `What is this ${type}'s school?`,
                name: "school",
            })
            break;

        default:
            throw new Error("The type of posistion has not been provided.")
    }

    return inquirer.prompt(questions);
}

function askForRole() {
    return inquirer.prompt([
        {
            type: "list",
            choices: [
                'Engineer',
                'Intern',
                'No more employees to add',
            ],
            message: `Would you like to add another employee?`,
            name: 'role'
        },
    ])
    .then((response) => {
        switch (response.role) {
            case "Engineer":
                {
                    return askForEmployee("Engineer")
                        .then((answers) => {
                            employees.push(new Engineer(...Object.values(answers)));
                        })
                        .then(() => {
                            askForRole()
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }

            case "Intern":
                {
                    return askForEmployee("Intern")
                        .then((answers) => {
                            employees.push(new Intern(...Object.values(answers)));
                        })
                        .then(() => {
                            askForRole()
                        })

                        .catch((err) => {
                            console.log(err);
                        });
                }

            case "No more employees to add":
                renderHTML(employees)
                break;
        }
    });

}

function renderHTML(employees) {
    try {
        fs.writeFileSync('index.html', genHTML.genHTML())
        }
        catch(err) {
            console.error(err)
        }
    
      
        try {
        for (let i = 0; i < employees.length; i++) {
            const employee = employees[i];
            console.log(employee)
            console.log(employee.constructor.name)
            
            if(employee.constructor.name === "Manager") {
                fs.appendFileSync('index.html', genHTML.genManager(employee))}

            if(employee.constructor.name === "Engineer") {
                fs.appendFileSync('index.html', genHTML.genEngineer(employee))}

            if(employee.constructor.name === "Intern") {
                fs.appendFileSync('index.html', genHTML.genIntern(employee))}
        }}
        catch(err) {
            console.error(err)
        }

        try {
        fs.appendFileSync('index.html', genHTML.genEnd())
        }
        catch(err) {
            console.error(err)
        }

}

main();