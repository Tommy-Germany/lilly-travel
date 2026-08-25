const foodButton = document.getElementById("foodButton");
const foodCard = document.getElementById("foodCard");
const closeFood = document.getElementById("closeFood");
const todaySection = document.querySelector(".today");

function openFood() {
  if (foodCard) {
    foodCard.hidden = false;
  }

  if (todaySection) {
    todaySection.style.display = "none";
  }
}

function closeFoodView() {
  if (foodCard) {
    foodCard.hidden = true;
  }

  if (todaySection) {
    todaySection.style.display = "";
  }
}

if (foodButton) {
  foodButton.addEventListener("click", openFood);
}

if (closeFood) {
  closeFood.addEventListener("click", closeFoodView);
}
