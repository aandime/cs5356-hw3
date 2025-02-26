fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
        document.getElementById("cat-fact").innerText = data.fact;
    })
    .catch(error => {
        console.log("Error fetching cat fact:", error);
    });
