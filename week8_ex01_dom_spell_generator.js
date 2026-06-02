let generateButton = document.getElementById("generateButton");
let resetButton = document.getElementById("resetButton");
let spellArea = document.getElementById("spellArea");
let ingredients = document.querySelectorAll("#ingredientsList li");

generateButton.addEventListener("click", generateSpell);
resetButton.addEventListener("click", resetSpell);

function generateSpell()
{
    let count = 3;

    let countdown = setInterval(function()
    {
        spellArea.textContent = count;
        count--;

        if(count === 0)
        {
            clearInterval(countdown);

            let randomIndex = Math.floor(Math.random() * ingredients.length);
            let selectedIngredient = ingredients[randomIndex].textContent;

            spellArea.textContent = "✨ Spell created using: " + selectedIngredient;

            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            spellArea.style.backgroundColor = randomColor;
        }

    }, 1000);
}

function resetSpell()
{
    spellArea.textContent = "Your spell will appear here...";
    spellArea.style.backgroundColor = "white";
}