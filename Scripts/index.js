const scores = document.getElementsByClassName('rating__score');

for (let score of scores) {
    score.addEventListener("click", handleClick);
}

function handleClick(event){    
    const elementId = event.target.id;
    document.getElementById(elementId).classList.add("selected");
}

function handleSubmit(){
   document.getElementById("feedback").classList.add("hidden");
   document.getElementById("thank--you").classList.remove("hidden");

}