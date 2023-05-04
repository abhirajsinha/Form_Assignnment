const selectCountryDropDown = document.querySelector("#country");
const selectStateDropDown = document.querySelector("#state");

// document.addEventListener("DOMContentLoaded",()=>);
selectCountryDropDown.addEventListener("click", () => {
  fetch(
    "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((countries) => {
      let countryOption = "";
      let stateOption = "";
      countries.forEach((country) => {
        countryOption += `<Option id="countryName">${country.name}</Option>`;
      });
      selectCountryDropDown.innerHTML = countryOption;
    })
    .catch((err) => {
      console.log(err);
    });
});

const populateStates = () => {
  fetch(
    "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((countries) => {
      let stateOption = "";
      countries.forEach((country) => {
        if (country.name === selectCountryDropDown.value) {
          country.states.forEach((state) => {
            stateOption += `<Option>${state.name}</Option>`;
          });
        }
      });
      selectStateDropDown.innerHTML = stateOption;
    })
    .catch((err) => {
      console.log(err);
    });
};

// document.addEventListener("DOMContentLoaded", populateStates);
selectCountryDropDown.addEventListener("change", populateStates);
selectCountryDropDown.addEventListener("click", populateStates);

let errObj = [];
let message = "";
let errField = "";
function errorHandler(errField, message) {
  errObj = [];
  errField = errField;
  message = message;
  errObj.push({ errField, message });
  suc.textContent =
    "Result" +
    ":" +
    " { " +
    errObj[0].errField +
    " : " +
    "{" +
    "Error : " +
    errObj[0].message +
    "}" +
    "}";
  suc.style.display = "block";
}

function validateForm() {
  const name = document.getElementById("fname");
  const number = document.getElementById("cnumber");
  const email = document.getElementById("email");
  const dob = document.getElementById("dob");
  const suc = document.getElementById("suc");
  const state = document.getElementById("state");

  if (name.value == "") {
    errorHandler("Name", "Please Enter your Name");
    return;
  } else if (name.value.length < 4 || name.value.length > 10) {
    errorHandler("Name", "Name length should be between 4 - 10 characters");
  } else if (dob.value == "") {
    errorHandler("DOB", "Please Enter Your Date of Birth");
  } else if (number.value == "") {
    errorHandler("Phone Number", "Please Enter Your Phone Number");
  } else if (number.value.length < 10 || number.value.length > 10) {
    errorHandler("Phone Number", "Phone number should of 10 digits");
  } else if (selectCountryDropDown.value == "select country") {
    errorHandler("Country", "Please select a country");
  } else if (
    selectStateDropDown.value == "select state" ||
    selectStateDropDown.value == ""
  ) {
    errorHandler("State", "Please select a state");
  } else if (email.value == "") {
    errorHandler("Email", "Please Enter Your Email");
  } else {
    errObj = [];
    errField = "Success";
    message = "All Fields are Valid";
    errObj.push({ errField, message });
    suc.textContent =
      "Result" +
      ":" +
      " { " +
      errObj[0].errField +
      " : " +
      errObj[0].message +
      "}";
    suc.style.display = "block";
  }
  return true;
}

const login_form = document.getElementById("formSubmit");
login_form.addEventListener("submit", function (event) {
  event.preventDefault();
});
