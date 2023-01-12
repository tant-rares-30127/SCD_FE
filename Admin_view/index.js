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
        document.getElementById("c3").innerHTML = "Check-in";
        document.getElementById("c4").innerHTML = "Check-out";
        CreateHoursTable(employeeHoursList, element.name);
      } else {
        if (e.target.value == "All") {
          ClearTable();
          document.getElementById("c3").innerHTML = "Hourly rate";
          document.getElementById("c4").innerHTML = "Enroll Date";
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

function CreateHoursTable(memberList, name) {
  memberList.forEach((element) => {
    if (element.employee.name == name) InsertElementInTable(element);
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
  if (element.name != null) cell2.innerHTML = element.name;
  else cell2.innerHTML = element.employee.name;
  if (element.name != null) cell3.innerHTML = element.hourlyRate;
  else {
    cell3.innerHTML = element.checkIn;
    cell3.innerHTML = moment(cell3.innerHTML).format("MMMM Do YYYY, h:mm:ss A");
  }
  if (element.name != null) cell4.innerHTML = element.enrollDate;
  else cell4.innerHTML = element.checkOut;
  cell4.innerHTML = moment(cell4.innerHTML).format("MMMM Do YYYY, h:mm:ss A");
}

function ClearTable() {
  var table = document.getElementById("table");
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
