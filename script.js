const form = document.querySelector("form");
const email = document.querySelector(".email");
const emailInput = document.querySelector(".email input");

console.log(form, email, emailInput);
form.onsubmit = () => {
  let validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailInput.value
    );
  if (validEmail) {
    return true;
  } else {
    email.setAttribute("data-error", "");
    return false;
  }
};
