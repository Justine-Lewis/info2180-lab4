const searchbtn = document.getElementById("search");
const searchfld = document.getElementById("SearchField");
const resultDiv = document.getElementById("result");

function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}


searchbtn.addEventListener("click", ()=>{
    //fetching the data from superheroes.php
    const query = sanitizeInput(searchfld.value.trim());
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : `superheroes.php`;

    fetch (url)
    .then(response => {
        if (!response.ok){
            throw new Error ("bad response");
        }
        return response.text();
    })
    .then (data => {
        resultDiv.innerHTML = data; // Display the response in the result div
    })

});