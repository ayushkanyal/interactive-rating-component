const scores = document.getElementsByClassName("rating__score");

for (let score of scores) {
  score.addEventListener("click", handleClick);
}

function refreshList() {
  const selectedButton = document.querySelector(".selected");
  console.log(selectedButton);
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }
}

refreshList();

function handleClick(event) {
  const elementId = event.target.id;
  const selectedItem = document.getElementById(elementId);
  console.log(elementId);
  if (selectedItem.classList.contains("selected")) {
    selectedItem.classList.remove("selected");
  } else {
    refreshList();
    selectedItem.classList.add("selected");
  }
  updateScore(event.target.id);
}

function updateScore(score) {
  let scoreText = document.getElementsByClassName("thank--you__score")[0];
  scoreText.innerHTML = `You selected ${score} out of 5`;
}

function handleSubmit() {
  const selectedButton = document.querySelector(".selected");
  if (selectedButton) {
    document.getElementsByClassName("feedback")[0].classList.add("hidden");
    document.getElementsByClassName("thank--you")[0].classList.remove("hidden");
  }
}
