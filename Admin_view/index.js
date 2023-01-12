var employeesList;
var employeeHoursList;

axios
  .get("http://localhost:8083/employee")
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
    employeesList = data;
    const select = document.getElementById("employees");

    data.forEach((element) => {
      let newOption = new Option(element.name, element.id);
      select.add(newOption, undefined);
    });

    CreateTable(data);
  });

axios
  .get("http://localhost:8083/employeeHours")
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data);
    employeeHoursList = data;

    //CreateHoursTable(data);
  });

document
  .getElementById("employees")
  .addEventListener("change", async function (e) {
    employeesList.forEach((element) => {
      if (element.id == e.target.value) {
        ClearTable();
        InsertElementInTable(element);
      } else {
        if (e.target.value == "All") {
          ClearTable();
          CreateTable(employeesList);
        }
      }
    });
  });

function SendElement(elementSent) {
  employeesList.forEach((element) => {
    if (elementSent.options[elementSent.selectedIndex].text == element.name) {
      ClearTable();
      InsertElementInTable(element);
    }
  });
}

function CreateTable(memberList) {
  memberList.forEach((element) => {
    InsertElementInTable(element);
  });
}

function CreateHoursTable(memberList) {
  memberList.forEach((element) => {
    InsertElementInTable(element);
  });
}

function InsertElementInTable(element) {
  var table = document.getElementById("table");
  var row = table.insertRow();
  row.className = "bottom-row";
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = element.id;
  cell2.innerHTML = element.name;
  cell3.innerHTML = element.hourlyRate;
  cell4.innerHTML = element.enrollDate;
}

function ClearTable() {
  var table = document.getElementById("table");
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
