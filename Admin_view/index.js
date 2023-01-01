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
    const select = document.getElementById("employees");

    data.forEach((element) => {
      let newOption = new Option(element.name, "Option Value");
      select.add(newOption, undefined);
    });

    CreateTable(data);
  });

function CreateTable(memberList) {
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
