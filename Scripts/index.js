const scores = document.getElementsByClassName("rating__score");

for (let score of scores) {
  score.addEventListener("click", handleClick);
}

function handleClick(event) {
  const elementId = event.target.id;
  document.getElementById(elementId).classList.add("selected");
  updateScore(event.target.id);
}

function updateScore(score) {
  let scoreText = document.getElementsByClassName("thank--you__score")[0];
  scoreText.innerHTML = `You selected ${score} out of 5`;
}

function handleSubmit(event) {
  document.getElementsByClassName("feedback")[0].classList.add("hidden");
  document.getElementsByClassName("thank--you")[0].classList.remove("hidden");
}
