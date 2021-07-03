const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile } = require("./src/generate-site");

const promptUser = (employees) => {
  console.log(`
==================
Add a New Employee
==================
    `);

  if (!employees) {
    employees = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "WHat is the email of the employee?",
      },
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?",
        when: (answers) => answers.role === "Manager",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's GitHub account?",
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the employee's school?",
        when: (answers) => answers.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])
    .then((answers) => {
      employees.push(answers);
      if (answers.confirmAddEmployee) {
        return promptUser(employees);
      } else {
        return employees;
      }
    });
};

promptUser()
  .then((data) => {
    console.log(data);
    return generatePage(data);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  });
