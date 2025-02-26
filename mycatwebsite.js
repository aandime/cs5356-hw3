fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
        const britishShorthair = data.find(breed => breed.name === "British Shorthair");
        
        if (britishShorthair) {
            document.getElementById("cat-fact").innerText = britishShorthair.description;
        } else {
            document.getElementById("cat-fact").innerText = "No facts available for British Shorthairs.";
        }
    })
    .catch(error => {
        console.log("Error fetching cat fact:", error);
        document.getElementById("cat-fact").innerText = "Error loading cat fact.";
    });
