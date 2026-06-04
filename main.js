let modal =
document.querySelector(".modal");

let sidebar =
document.querySelector(".nav-sidebar");

let navStatus = false;

function validateLogin()
{
    event.preventDefault();

    let username =
    document.getElementById("uname").value;

    let password =
    document.getElementById("pwd").value;

    if(username === "admin" &&
       password === "password123")
    {
        window.location.href =
        "index.html";
    }
    else
    {
        console.log("Invalid credentials");

        modal.style.display =
        "block";
    }
}

function dismissModal()
{
    modal.style.display =
    "none";
}

function toggleNav()
{
    if(navStatus === false)
    {
        sidebar.style.width =
        "250px";

        navStatus = true;
    }
    else
    {
        sidebar.style.width =
        "0px";

        navStatus = false;
    }
}