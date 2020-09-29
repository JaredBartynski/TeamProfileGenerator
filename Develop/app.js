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

//inquirer promt #1. need 4 total
inquirer.prompt([
    {
        //questions about the manager
    }])
    .then(function(managerAnswers){
        const manager = new Manager(managerAnswers.name, id, etc);
        employees.push(manager);

        //inquirer promt #2 which type of team member would you like to add. engineer, intern, or no more team members.
        .then(function(typeAnswers){
                if(typeAnswers === "Engineer"){
                    //inquireer promt #3 questions about engineer

                    //.then(function(engineerAnswers)) 
                    //const engineer = new Engineer(name, id, etc)
                    //employees.push(engineer)
                }
                else if(typeAnswers === "Intern")
                else {
                    //exit the inquirer calling render function
                }
        })
        
    })

//same as last hw. just make an array of questions and answers and call it "answers" so it can be called by the render function.

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render(answers);

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
const html = render(employees);

fs.writeFile(outputPath, html, function (err) {
  if (err) throw err;
  console.log("success!");
});
