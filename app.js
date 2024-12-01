const searchbtn = document.getElementById("search");

searchbtn.addEventListener("click", ()=>{
    //fetching the data from superheroes.php
    fetch("superheroes.php")
    .then(response => {
        if (!response.ok){
            throw new Error ("bad response");
        }
        return response.text();
    })
    .then (data => {
        alert(data);
    })

});