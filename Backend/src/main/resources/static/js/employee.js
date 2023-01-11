function getEmployees() {
    sendRequest("GET", "employee", null, getEmployeeSuccessHandler, errorHandler);
}

function getEmployeeSuccessHandler(respData) {
    var dropdown = document.getElementById("selectEmployee");
    for (var i=0;i<respData.length;i++){
        var option = document.createElement('option');
        option.value = respData[i].id;
        option.innerHTML = respData[i].id + " " + respData[i].name;
        dropdown.appendChild(option);
    }
}

function errorHandler(status) {
    alert("err response: " + status); // popup on err.
}

function getHoursWorked() {
    var employeeId = $('#selectEmployee').find(":selected").val();
    var from = $('#startDate').val();
    var to = $('#endDate').val();

    var parameters = {
        "from": from,
        "to": to
    }
    sendRequest("GET", "timetracking/" + employeeId, parameters, getHoursWorkedSuccessHandler, errorHandler);
}

function getHoursWorkedSuccessHandler(respData) {
    $('#result').text(respData)
}