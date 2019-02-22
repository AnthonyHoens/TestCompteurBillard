const container = document.querySelector("#player");
let div = container.querySelectorAll("div");

function addClasse(e) {
    
}

div.forEach(function(e){
    e.currentTarget.classList = "premierJoueur";
})
