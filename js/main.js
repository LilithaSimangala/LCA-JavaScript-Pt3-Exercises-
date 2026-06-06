let developers = [];
let filteredDevelopers = [];
let isCardView = true;

let output = document.getElementById("output");
let searchInput = document.getElementById("searchInput");
let devCount = document.getElementById("devCount");

let toggleViewBtn = document.getElementById("toggleViewBtn");

let nameInput = document.getElementById("nameInput");
let roleInput = document.getElementById("roleInput");
let skillsInput = document.getElementById("skillsInput");
let locationInput = document.getElementById("locationInput");
let addBtn = document.getElementById("addBtn");


// LOAD JSON DATA
fetch("developers.json")
.then(res => res.json())
.then(data => {
    developers = data;
    filteredDevelopers = data;
    renderDevelopers();
});


// RENDER FUNCTION
function renderDevelopers()
{
    output.innerHTML = "";

    devCount.textContent = filteredDevelopers.length;

    if(isCardView)
    {
        renderCards();
    }
    else
    {
        renderTable();
    }
}


// CARD VIEW
function renderCards()
{
    output.className = "row";

    filteredDevelopers.forEach(dev => {

        let col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
            <div class="card p-3 mb-3">
                <img src="${dev.avatar}" width="80">

                <h5>${dev.name}</h5>
                <p>${dev.role}</p>

                <p>${dev.location}</p>

                <p>${dev.skills.join(", ")}</p>

                <button class="btn btn-sm btn-primary" onclick="toggleHire(${dev.id})">
                    Toggle Hire
                </button>

                <div class="${dev.availableForHire ? 'hire-badge' : ''}">
                    ${dev.availableForHire ? "Available" : "Not Available"}
                </div>
            </div>
        `;

        output.appendChild(col);
    });
}


// TABLE VIEW
function renderTable()
{
    output.className = "";

    let table = document.createElement("table");
    table.className = "table table-bordered";

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Location</th>
            <th>Skills</th>
            <th>Status</th>
        </tr>
    `;

    filteredDevelopers.forEach(dev => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${dev.name}</td>
            <td>${dev.role}</td>
            <td>${dev.location}</td>
            <td>${dev.skills.join(", ")}</td>
            <td>
                <button onclick="toggleHire(${dev.id})">
                    Toggle
                </button>
                ${dev.availableForHire ? "Available" : "Not"}
            </td>
        `;

        table.appendChild(row);
    });

    output.appendChild(table);
}


// SEARCH FUNCTION
searchInput.addEventListener("input", function()
{
    let value = searchInput.value.toLowerCase();

    filteredDevelopers = developers.filter(dev =>
        dev.name.toLowerCase().includes(value) ||
        dev.role.toLowerCase().includes(value) ||
        dev.skills.join(" ").toLowerCase().includes(value)
    );

    renderDevelopers();
});


// ADD DEVELOPER
addBtn.addEventListener("click", function()
{
    let newDev = {
        id: Date.now(),
        name: nameInput.value,
        role: roleInput.value,
        skills: skillsInput.value.split(","),
        location: locationInput.value,
        avatar: "https://placehold.co/100x100",
        availableForHire: true
    };

    developers.push(newDev);
    filteredDevelopers.push(newDev);

    renderDevelopers();
});


// TOGGLE HIRE STATUS
function toggleHire(id)
{
    developers = developers.map(dev => {

        if(dev.id === id)
        {
            dev.availableForHire = !dev.availableForHire;
        }

        return dev;
    });

    filteredDevelopers = developers;

    renderDevelopers();
}


// TOGGLE VIEW
toggleViewBtn.addEventListener("click", function()
{
    isCardView = !isCardView;
    renderDevelopers();
});