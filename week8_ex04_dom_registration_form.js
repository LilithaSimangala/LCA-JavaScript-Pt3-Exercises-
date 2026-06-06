let registrationForm =
document.getElementById("registrationForm");

let username =
document.getElementById("username");

let email =
document.getElementById("email");

let password =
document.getElementById("password");

let confirmPassword =
document.getElementById("confirmPassword");

let usernameError =
document.getElementById("usernameError");

let emailError =
document.getElementById("emailError");

let passwordError =
document.getElementById("passwordError");

let confirmPasswordError =
document.getElementById("confirmPasswordError");

let formMessage =
document.getElementById("formMessage");

registrationForm.addEventListener(
"submit",
function(event)
{
    event.preventDefault();

    let valid = true;

    formMessage.textContent = "";

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    username.style.borderColor = "";
    email.style.borderColor = "";
    password.style.borderColor = "";
    confirmPassword.style.borderColor = "";

    if(username.value === "")
    {
        usernameError.textContent =
        "Username cannot be empty";

        username.style.borderColor =
        "red";

        valid = false;
    }

    if(email.value === "")
    {
        emailError.textContent =
        "Email cannot be empty";

        email.style.borderColor =
        "red";

        valid = false;
    }
    else if(!email.value.includes("@"))
    {
        emailError.textContent =
        "Email must contain @";

        email.style.borderColor =
        "red";

        valid = false;
    }

    if(password.value === "")
    {
        passwordError.textContent =
        "Password cannot be empty";

        password.style.borderColor =
        "red";

        valid = false;
    }
    else if(password.value.length < 6)
    {
        passwordError.textContent =
        "Password must be at least 6 characters";

        password.style.borderColor =
        "red";

        valid = false;
    }

    if(confirmPassword.value === "")
    {
        confirmPasswordError.textContent =
        "Confirm Password cannot be empty";

        confirmPassword.style.borderColor =
        "red";

        valid = false;
    }
    else if(confirmPassword.value !== password.value)
    {
        confirmPasswordError.textContent =
        "Passwords do not match";

        confirmPassword.style.borderColor =
        "red";

        valid = false;
    }

    if(valid)
    {
        formMessage.textContent =
        "Registration successful!";

        console.log(
        "Username: " + username.value);

        console.log(
        "Email: " + email.value);
    }
});