var checkedIn = false;
var checkin;

document.getElementById("input").addEventListener("click", async function (e) {
  document.getElementById("input").value = "";
});

document.getElementById("button").addEventListener("click", async function (e) {
  if (checkedIn) {
    document.getElementById("check-out").innerHTML = moment().format(
      "MMMM Do YYYY, h:mm:ss A"
    );
    document.getElementById("buttonReset").disabled = false;
    checkedIn = false;
    var id = document.getElementById("input").value;
    axios.post(`http://localhost:8083/employeeHours/${id}`, {
      checkIn: checkin,
      checkOut: moment(),
    });
  } else {
    document.getElementById("button").innerHTML = "Check-out";
    document.getElementById("check-in").innerHTML = moment().format(
      "MMMM Do YYYY, h:mm:ss A"
    );
    checkin = moment();
    document.getElementById("check-out").innerHTML = "Didn't checked out";
    checkedIn = true;
  }
});

document
  .getElementById("buttonReset")
  .addEventListener("click", async function (e) {
    document.getElementById("button").innerHTML = "Check-in";
    document.getElementById("check-in").innerHTML = "Didn't checked in";
    document.getElementById("check-out").innerHTML = "Can't check out";
    document.getElementById("buttonReset").disabled = true;
  });
