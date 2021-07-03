const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile } = require("./src/generate-site");

const promptManager = () => {
  const employees = [];

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the team manager",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      employees.push(answers);
      employees[0].role = "Manager";
      return employees;
    });
};

const promptEmployee = (employees) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please add an employee from the list.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the employee",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
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
        return promptEmployee(employees);
      } else {
        return employees;
      }
    });
};

promptManager()
  .then((managerData) => {
    return promptEmployee(managerData);
  })
  .then((data) => {
    return generatePage(data);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  });
