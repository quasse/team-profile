const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("Sam", 2, "test@gmail.com", 100);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets a manager's office number", () => {
  const manager = new Manager("Sam", 2, "test@gmail.com", 100);

  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test("gets a manager's role", () => {
  const manager = new Manager("Sam", 2, "test@gmail.com", 100);

  expect(manager.getRole()).toEqual("Manager");
});
