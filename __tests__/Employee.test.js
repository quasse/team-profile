const Employee = require("../lib/Employee.js");

test("Creates an employee object", () => {
  const employee = new Employee("Sam", 1, "test@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets an employee's name", () => {
  const employee = new Employee("Sam", 1, "test@gmail.com");

  expect(employee.getName()).toEqual(employee.name);
});

test("gets an employee's id", () => {
  const employee = new Employee("Sam", 1, "test@gmail.com");

  expect(employee.getId()).toEqual(employee.id);
});

test("gets an employee's email", () => {
  const employee = new Employee("Sam", 1, "test@gmail.com");

  expect(employee.getEmail()).toEqual(employee.email);
});

test("gets an employee's role", () => {
  const employee = new Employee("Sam", 1, "test@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
