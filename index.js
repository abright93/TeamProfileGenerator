const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const managerCard = require("./source/template").managerCard
const engineerCard = require("./source/template").engineerCard
const internCard = require("./source/template").internCard

const roleQuestion = [
  {
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: ["Manager", "Engineer", "Intern"],
  }
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the managers ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the managers email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the managers office phone number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineers name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineers ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineers email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "what is the engineers GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the interns name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the interns ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the interns email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the interns school?",
  },
];

const employeeCards = [];

function init() {
    inquirer.prompt(roleQuestion).then((roleAnswer) => {
      if (roleAnswer.role === "Manager") {
        console.log(roleAnswer.role)
        inquirer.prompt(managerQuestions).then((managerAnswers) => {
          const htmlManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
          employeeCards.push(managerCard(htmlManager));
          initialAddMore ()
        });
       } else if (roleAnswer.role === "Engineer") {
         console.log(roleAnswer.role)
         inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
          const htmlEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub);
          employeeCards.push(engineerCard(htmlEngineer));
          initialAddMore ()
        });
       } else if (roleAnswer.role === "Intern") {
         console.log(roleAnswer.role)
         inquirer.prompt(internQuestions).then((internAnswers) => {
          const htmlIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
          employeeCards.push(internCard(htmlIntern));
          initialAddMore ()
        });
    }
});  
}
init();

function initialAddMore () {
    inquirer.prompt([{
        type: "confirm",
        name: "addMore",
        message: "Would you like to add more team members?",
        default: true,
    }])
    .then((answer) => {
        if (answer.addMore) {
            init();
        }
        else {
            buildHtml();
        }
})}



const buildHtml = () => {
    const html = `    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                {{ team }}
            </div>
        </div>
    </div>
</body>

</html>`
    fs.writeFileSync('./distribution/index.html', html, (err) => err ? console.log(err) : '')
}