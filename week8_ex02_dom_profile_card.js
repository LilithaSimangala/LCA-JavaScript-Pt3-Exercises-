let profileCard =
document.getElementById("profileCard");

let profileName =
document.getElementById("profileName");

let profileRole =
document.getElementById("profileRole");

let profileImage =
document.getElementById("profileImage");

let updateNameBtn =
document.getElementById("updateNameBtn");

let updateRoleBtn =
document.getElementById("updateRoleBtn");

let toggleStatusBtn =
document.getElementById("toggleStatusBtn");

let changeImageBtn =
document.getElementById("changeImageBtn");

updateNameBtn.addEventListener("click", function()
{
    let newName =
    prompt("Enter a new name:");

    profileName.textContent =
    newName;
});

updateRoleBtn.addEventListener("click", function()
{
    let newRole =
    prompt("Enter a new role:");

    profileRole.textContent =
    newRole;
});

toggleStatusBtn.addEventListener("click", function()
{
    profileCard.classList.toggle(
    "active-status");
});

changeImageBtn.addEventListener("click", function()
{
    let newImage =
    prompt("Enter a new image URL:");

    profileImage.src =
    newImage;
});