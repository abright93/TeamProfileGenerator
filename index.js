// Link to source
const genHTML = require('./source/genHTML');

// Team profiles
const Employee = require('./library/employee');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

const inquirer = require('inquirer');

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = {manager, engineer, intern};

function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({office, anotherEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        // console.log(employeeArray)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({github, anotherEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        // console.log(employeeArray)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({school, anotherEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArray)
                        if (anotherEntry) {
                            return Prompt();
                        }
                        
                    })
            }
        })
};

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.htm./', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });