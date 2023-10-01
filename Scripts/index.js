const scores = document.getElementsByClassName('rating__score');

for (let score of scores) {
    score.addEventListener("click", handleClick);
}

function handleClick(event){    
    const elementId = event.target.id;
    document.getElementById(elementId).classList.add("selected");
}

function handleSubmit(event){
   document.getElementsByClassName("feedback")[0].classList.add("hidden");
   document.getElementsByClassName("thank--you")[0].classList.remove("hidden");
   let score = document.getElementsByClassName("thank--you__score")[0]; 
   console.log(event);
   console.log(score.innerHTML);
}
