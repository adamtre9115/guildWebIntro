const Form = document.getElementsByTagName("form")[0];
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Error = document.getElementById("error");

Name.addEventListener(
  "input",
  function(e) {
    //allow only letters in name input
    let pattern = new RegExp("^[a-zA-Z ]*$");

    //name input text value
    let nameInput = Name.value;

    //check for validity and pattern match
    if (Name.validity.valid && nameInput.match(pattern)) {
      console.log("Name input is valid");
      Error.innerHTML = "";
    } else {
      Error.innerHTML =
        "<span class='text-danger'>Please enter valid text</span>";
    }
  },
  false
);

Email.addEventListener(
  "input",
  function(e) {
    // regex pattern to validate email
    let pattern = new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

    // gather email input
    let emailInput = Email.value;

    if (Email.validity.valid && emailInput.match(pattern)) {
      console.log("Email input is valid");
      Error.innerHTML = "";
    } else {
      Error.innerHTML =
        "<span class='text-danger'>Please enter a valid email</span>";
    }
  },
  false
);

Phone.addEventListener(
  "input",
  function(e) {
    // regex to checck for valid phone
    let pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    // gather phone input value
    let phoneInput = Phone.value;

    // if valid phone and pattern match
    if (Phone.validity.valid && phoneInput.match(pattern)) {
      console.log("phone is valid");
      Error.innerHTML = "";
    } else {
      Error.innerHTML =
        "<span class='text-danger'>Please enter a valid phone number</span>";
    }
  },
  false
);


Form.addEventListener("submit", function(e) {
    //prevent form submittal
    e.preventDefault();

    //if all validations clear
    if (isValid) {
    console.log("let's submit");
    Error.innerHTML =
      "<span class='text-success'>Everything looks good!</span>";
  } else {
    console.log("can't send just yet");
  }
});

const isValid = () => {
  if (Name.validity.valid && Email.validity.valid && Phone.validity.valid) {
    console.log("let's submit");
    Error.innerHTML =
      "<span class='text-success'>Look's good to submit!</span>";
      return true;
  } else {
    return false;
  }
}
