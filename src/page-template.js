const generateCards = (employees) => {
  if (!employees) {
    return "";
  }

  return `
    ${employees
      .map((employee) => {
        return `
        <div class="card col-3 m-3">
            <div class="card-body bg-primary">
                <h5 class="card-title"><strong>${employee.name}</strong></h5>
                <p class="card-text"><strong>${employee.role}</strong></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID</strong>: ${
                  employee.id
                }</li>
                <li class="list-group-item"><strong>Email</strong>: <a href="mailto:${
                  employee.email
                }">${employee.email}</a></li>
                <li class="list-group-item">${generateSpecialProperty(
                  employee
                )}</li>
            </ul>
        </div>
        `;
      })
      .join("")}
  `;
};

const generateSpecialProperty = (employee) => {
  if (employee.role === "Manager") {
    return `<strong>Office Number</strong>: ${employee.officeNumber}`;
  } else if (employee.role === "Engineer") {
    return `<strong>GitHub Account</strong>: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
  } else {
    return `<strong>School</strong>: ${employee.school}`;
  }
};

module.exports = (data) => {
  //Creates an array of managers
  const managers = data.filter((employee) => employee.role === "Manager");

  //creates an array of engineers
  const engineers = data.filter((employee) => employee.role === "Engineer");

  //creates an array of interns
  const interns = data.filter((employees) => employees.role === "Intern");

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class="hero bg-danger p-4 text-light text-center">
            <h1>My Team</h1>
        </header>

        <main class="container">
            <div class="row">
            ${generateCards(managers)}
            ${generateCards(engineers)}
            ${generateCards(interns)}
            </div>
        </main>
    </body>
    </html>
    `;
};
