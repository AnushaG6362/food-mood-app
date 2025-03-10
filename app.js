document.getElementById("get-recipes").addEventListener("click", function() {
    let mood = document.getElementById("mood").value;
    let ingredients = document.getElementById("ingredients").value.split(',').map(item => item.trim().toLowerCase());

    document.getElementById("loading-message").style.display = "block";

    setTimeout(function() {
        document.getElementById("loading-message").style.display = "none";
        let recipes = [];

        // 🌟 SINGLE-INGREDIENT MATCHES
        if (ingredients.includes("dal")) {
            recipes.push("Dal Fry - A simple and delicious dal dish.");
        }
        if (ingredients.includes("wheat")) {
            recipes.push("Chapati - A healthy wheat flatbread.");
        }
        if (ingredients.includes("rice")) {
            recipes.push("Plain Rice - Perfect with any curry.");
        }

        // 🍛 SAMBAR VARIETIES
        if (ingredients.includes("dal") && ingredients.includes("curry leaves")) {
            recipes.push("Curry Dal - A flavorful South Indian dal dish.");
        }
        if (ingredients.includes("dal") && ingredients.includes("spinach")) {
            recipes.push("Spinach Sambar - A healthy South Indian dish!");
        }
        if (ingredients.includes("dal") && ingredients.includes("peas")) {
            recipes.push("Peas Sambar - A protein-rich sambar with fresh peas.");
        }

        // 🥞 DOSA
        if (ingredients.includes("rice") && ingredients.includes("urad dal")) {
            recipes.push("Dosa - A crispy and tasty South Indian breakfast.");
        }

        // 🍅 TOMATO BATH
        if (ingredients.includes("rice") && ingredients.includes("tomato") && ingredients.includes("spices")) {
            recipes.push("Tomato Bath - A delicious tomato rice dish.");
        }

        // 🎯 DEFAULT RESPONSE
        if (recipes.length === 0) {
            recipes.push("Try adding more ingredients or change your mood to get better suggestions.");
        }

        document.getElementById("recipe-suggestions").innerHTML = `
            <h3>Recipe Suggestions:</h3>
            <ul>${recipes.map(recipe => `<li>${recipe}</li>`).join('')}</ul>
        `;
    }, 2000);
});
