const buttons = document.querySelectorAll(".quick-actions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    const action = button.textContent.trim();

    if (action.includes("Essen")) {
      showFood();
    }

    if (action.includes("Navigation")) {
      alert("🧭 Navigation kommt als Nächstes.");
    }

    if (action.includes("Wetter")) {
      alert("🌤️ Wetter wird vorbereitet.");
    }

    if (action.includes("Übersetzen")) {
      alert("🗣️ Übersetzung wird vorbereitet.");
    }

  });
});


function showFood() {

  const existingCard = document.querySelector(".food-card");

  if (existingCard) {
    existingCard.remove();
    return;
  }

  const card = document.createElement("section");

  card.className = "food-card";

  card.innerHTML = `
    <div class="food-header">
      <div>
        <span class="food-label">LILLY EMPFIEHLT</span>
        <h2>🍴 Essen in der Nähe</h2>
      </div>
      <button class="close-food">✕</button>
    </div>

    <div class="restaurant">
      <div class="restaurant-top">
        <div>
          <h3>Snack Matira</h3>
          <p class="price">$$ · Polynesisch · unkompliziert</p>
        </div>
        <span class="distance">📍 5 Min.</span>
      </div>

      <p>
        Lokale Küche direkt in der Nähe von Matira Beach.
        Gut für ein entspanntes Mittagessen.
      </p>

      <div class="restaurant-actions">
        <button class="primary-action">🧭 Hinfahren</button>
        <button>📞 Anrufen</button>
      </div>
    </div>

    <div class="restaurant plan-b">
      <span class="food-label">PLAN B</span>
      <h3>Fare Manuia</h3>
      <p>Alternative in der Nähe · $$</p>
    </div>
  `;

  const today = document.querySelector(".today");

  today.insertAdjacentElement("beforebegin", card);

  card.querySelector(".close-food").addEventListener("click", () => {
    card.remove();
  });

}
