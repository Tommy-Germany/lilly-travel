const foodButton = document.getElementById("foodButton");
const todaySection = document.querySelector(".today");
const lillyTip = document.querySelector(".lilly-tip");
const quickActions = document.querySelector(".quick-actions");

let foodCard = null;


/* =========================
   ESSEN ÖFFNEN
   ========================= */

function openFood() {

  // Tagesübersicht ausblenden
  if (todaySection) {
    todaySection.style.display = "none";
  }

  // Lilly-Tipp der Hauptseite ausblenden
  if (lillyTip) {
    lillyTip.style.display = "none";
  }

  // Restaurantbereich nur einmal erzeugen
  if (!foodCard) {

    foodCard = document.createElement("section");
    foodCard.className = "food-card";

    foodCard.innerHTML = `
      <div class="food-header">

        <div>
          <span class="food-label">LILLY EMPFIEHLT</span>
          <h2>🍴 Essen in der Nähe</h2>
        </div>

        <button
          class="close-food"
          id="closeFood"
          aria-label="Essensansicht schließen">
          ×
        </button>

      </div>


      <article class="restaurant">

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

          <button
            class="primary-action"
            id="driveToSnackMatira">
            🧭 Hinfahren
          </button>

          <button id="callSnackMatira">
            📞 Anrufen
          </button>

        </div>

      </article>


      <article class="restaurant restaurant-second">

        <div class="restaurant-top">

          <div>
            <h3>Fare Manuia</h3>
            <p class="price">$$ · Polynesisch · lokal</p>
          </div>

          <span class="distance">📍 8 Min.</span>

        </div>

        <p>
          Lokale Küche in entspannter Atmosphäre.
          Eine gute Alternative in der Nähe.
        </p>

        <div class="restaurant-actions">

          <button
            class="primary-action"
            id="driveToFareManuia">
            🧭 Hinfahren
          </button>

          <button id="callFareManuia">
            📞 Anrufen
          </button>

        </div>

      </article>
    `;


    // Restaurantbereich direkt unter Schnellwahl einsetzen
    quickActions.insertAdjacentElement("afterend", foodCard);


    // Schließen-Button aktivieren
    const closeFood = document.getElementById("closeFood");

    if (closeFood) {
      closeFood.addEventListener("click", closeFoodView);
    }
  }

  // Bereits erzeugte Restaurantansicht wieder anzeigen
  foodCard.style.display = "";
}


/* =========================
   ESSEN SCHLIESSEN
   ========================= */

function closeFoodView() {

  if (foodCard) {
    foodCard.style.display = "none";
  }

  if (todaySection) {
    todaySection.style.display = "";
  }

  if (lillyTip) {
    lillyTip.style.display = "";
  }
}


/* =========================
   ESSEN-BUTTON
   ========================= */

if (foodButton) {
  foodButton.addEventListener("click", openFood);
}
