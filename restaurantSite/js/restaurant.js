const Form = document.getElementsByTagName("form")[0];
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Error = document.getElementById("error");
const Textbox = document.getElementById("additional");
let nameValid;
let emailValid;
let phoneValid;

const checkName = () => {
  Name.addEventListener("input", function(e) {
    //allow only letters in name input
    let pattern = new RegExp("^[a-zA-Z ]*$");

    //name input text value
    let nameInput = Name.value;

    //check for validity and pattern match
    if (Name.validity.valid && nameInput.match(pattern)) {
      console.log("Name input is valid");
      Error.innerHTML = "<span class='text-success'>Looks good!</span>";
      nameValid = true;
    } else {
      Error.innerHTML =
        "<span class='text-danger'>Please enter valid text</span>";
      nameValid = false;
    }
  });
};

const checkEmail = () => {
  Email.addEventListener("input", function(e) {
    // regex pattern to validate email
    let pattern = new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

    // gather email input
    let emailInput = Email.value;

    if (Email.validity.valid && emailInput.match(pattern)) {
      console.log("Email input is valid");
      Error.innerHTML = "<span class='text-success'>Looks good!</span>";
      emailValid = true;
    } else {
      Error.innerHTML =
        "<span class='text-danger'>Please enter a valid email</span>";
      emailValid = false;
    }
  });
};

const checkPhone = () => {
  Phone.addEventListener("input", function(e) {
    // regex to checck for valid phone
    let pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    // gather phone input value
    let phoneInput = Phone.value;

    // if valid phone and pattern match
    if (Phone.validity.valid && phoneInput.match(pattern)) {
      console.log("phone is valid");
      Error.innerHTML = "<span class='text-success'>Looks good!</span>";
      phoneValid = true;
    } else {
      Error.innerHTML =
        "<span class='text-danger'>Please enter a valid phone number</span>";
      phoneValid = false;
    }
  });
};

Form.addEventListener("submit", function(e) {
  //prevent form submittal
  e.preventDefault();

  //if all validations clear
  if (nameValid && emailValid && phoneValid) {
    console.log("let's submit");
    Error.innerHTML =
      "<span class='text-success'>Form successfully sent!</span>";

    // reset input values
    Name.value = "";
    Email.value = "";
    Phone.value = "";
    Textbox.value = "";
  } else {
    Error.innerHTML =
      "<span class='text-danger'>Something doesn't look right. Please check your info.</span>";
    console.log("can't send just yet");
  }
});

checkName();
checkEmail();
checkPhone();
