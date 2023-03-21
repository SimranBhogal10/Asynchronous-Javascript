const employee = {
  name: "ABC",
  team: "Switchboard",
  phone: "9876543210",
  skills: ["java", "spring", "javascript"],
};
let uid = 0;
createEmployee()
  .then((id) => {
    console.log(`Employee created with id ${id}`);
    return id;
  })
  .then((id) => {
    return welcomeProcess(id);
  })
  .catch((error) => {
    console.log(error.message);
  });

function createEmployee() {
  return new Promise((resolve, reject) => {
    if (!validateEmployee(employee)) {
      reject(new Error("Sorry you are not eligible!"));
    }
    uid += 1;
    setTimeout(() => {
      resolve(id);
    }, 3000);
  });
}

function validateEmployee(employee) {
  return !!(
    employee.name.length >= 3 &&
    employee.team != null &&
    employee.skills.length != 0
  );
}

function welcomeProcess(id) {
  employee.id = id;
  console.log("We welcome you onboard!");
}
