const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Sam", 3, "test@gmail.com", "UW-Madison");

  expect(intern.name).toEqual("Sam");
  expect(intern.id).toEqual(3);
  expect(intern.email).toEqual("test@gmail.com");
  expect(intern.school).toEqual("UW-Madison");
});

test("gets an intern's school", () => {
  const intern = new Intern("Sam", 3, "test@gmail.com", "UW-Madison");

  expect(intern.getSchool()).toEqual(intern.school);
});

test("gets an intern's role", () => {
  const intern = new Intern("Sam", 3, "test@gmail.com", "UW-Madison");

  expect(intern.getRole()).toEqual("Intern");
});
