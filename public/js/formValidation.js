// runs when department-form is submitted
document.getElementById("calendar-form").onsubmit = () => {
  clearErrors();

  let isValid = true;
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let date = document.getElementById("myDate").value.trim();
  let time = document.getElementById("myTime").value.trim();

  //   this checks to see if any inputs are missing
  if (!fname) {
    isValid = false;
    document.getElementById("err-fname").style.display = "block";
  }

  if (!lname) {
    isValid = false;
    document.getElementById("err-lname").style.display = "block";
  }

  if (!date) {
    isValid = false;
    document.getElementById("err-date").style.display = "block";
  }

  if (!time) {
    isValid = false;
    document.getElementById("err-time").style.display = "block";
  }
  return isValid;
};

// function that clears all errors initially
function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let error of errors) {
    error.style.display = "none";
  }
}
