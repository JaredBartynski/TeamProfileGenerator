const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//inquirer prompt #1 manager questions
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?",
    },
  ])

  .then(function (managerAnswers) {
    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    employees.push(manager);
    makeEmployees();
  });

function makeEmployees() {
  //inquirer promt #2 which type of team member would you like to add. engineer, intern, or no more team members.
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then(function (typeAnswers) {
      if (typeAnswers.name === "Engineer") {
        //inquirer prompt #3 questions about engineer
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is your engineer's id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is your engineer's email?",
            },
            {
              type: "input",
              name: "github",
              message: "What is your engineer's Github username?",
            },
          ])

          .then(function (engineerAnswers) {
            const engineer = new Engineer(
              engineerAnswers.name,
              engineerAnswers.id,
              engineerAnswers.email,
              engineerAnswers.github
            );
            employees.push(engineer);
            makeEmployees();
          });
      } else if (typeAnswers.name === "Intern") {
        //inquirer prompt #4 questions about intern
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your intern's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is your intern's id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is your intern's email?",
            },
            {
              type: "input",
              name: "school",
              message: "What is your intern's school?",
            },
          ])
          .then(function (internAnswers) {
            const intern = new Intern(
              internAnswers.name,
              internAnswers.id,
              internAnswers.email,
              internAnswers.school
            );
            employees.push(intern);
            makeEmployees();
          });
      } else {
        const html = render(employees);

        fs.writeFile(outputPath, html, function (err) {
          if (err) throw err;
          console.log("success!");
        });
      }
    });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

//render(answers);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
