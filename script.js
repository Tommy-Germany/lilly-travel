const foodButton = document.getElementById("foodButton");
const todaySection = document.querySelector(".today");
const lillyTip = document.querySelector(".lilly-tip");
const quickActions = document.querySelector(".quick-actions");

let foodCard = null;

/* =========================
   WETTER
   ========================= */

const weather = {
  icon: "☀️",
  temperature: 31,
  humidity: 72,
  wind: 12,
  rain: 10,
  text: "Perfektes Strandwetter"
};

function updateWeather() {

  const temperature =
    document.querySelector(".temperature");

  const weatherItems =
    document.querySelectorAll(".weather span");

  const weatherText =
    document.querySelector(".weather-text");

  if (!temperature) return;

  temperature.textContent =
    `${weather.icon} ${weather.temperature}°`;

  if (weatherItems.length >= 4) {

    weatherItems[1].textContent =
      `💧 ${weather.humidity} %`;

    weatherItems[2].textContent =
      `🌬 ${weather.wind} km/h`;

    weatherItems[3].textContent =
      `☔ ${weather.rain} %`;

  }

  if (weatherText) {

    weatherText.textContent =
      weather.text;

  }

}

/* =========================
   RESTAURANTS
   ========================= */

const restaurants = {

  snackMatira: {

    name: "Snack Matira",
    price: "$$",
    type: "Polynesisch · unkompliziert",
    distance: "5 Min.",
    description:
      "Lokale Küche direkt am Matira Beach.",

    addressLine1:
      "Beispielstraße 17",

    addressLine2:
      "98730 Bora Bora"

  },

  fareManuia: {

    name: "Fare Manuia",
    price: "$$",
    type: "Polynesisch · lokal",
    distance: "8 Min.",
    description:
      "Ruhiges Restaurant mit regionaler Küche.",

    addressLine1:
      "Beispielweg 155",

    addressLine2:
      "98730 Bora Bora"

  }

};

/* =========================
   RESTAURANTKARTE
   ========================= */

function createRestaurantCard(restaurant, idPrefix) {

  return `

  <article class="restaurant">

    <div class="restaurant-top">

      <div>

        <h3>${restaurant.name}</h3>

        <p class="price">

          ${restaurant.price}
          ·
          ${restaurant.type}

        </p>

      </div>

      <span class="distance">

        📍 ${restaurant.distance}

      </span>

    </div>

    <p>

      ${restaurant.description}

    </p>

    <p class="restaurant-address">

      📍 ${restaurant.addressLine1}<br>

      &nbsp;&nbsp;&nbsp;

      ${restaurant.addressLine2}

    </p>

    <div class="restaurant-actions">

      <button
      class="primary-action">

      🧭 Hinfahren

      </button>

      <button>

      📞 Anrufen

      </button>

    </div>

  </article>

  `;

}

/* =========================
   ESSEN
   ========================= */

function openFood() {

  if (todaySection)
    todaySection.style.display = "none";

  if (lillyTip)
    lillyTip.style.display = "none";

  if (!foodCard) {

    foodCard =
      document.createElement("section");

    foodCard.className =
      "food-card";

    foodCard.innerHTML = `

      <div class="food-header">

        <div>

          <span class="food-label">

            LILLY EMPFIEHLT

          </span>

          <h2>

            🍴 Essen in der Nähe

          </h2>

        </div>

        <button
          id="closeFood"
          class="close-food">

          ×

        </button>

      </div>

      ${createRestaurantCard(
        restaurants.snackMatira,
        "snack"
      )}

      <br>

      ${createRestaurantCard(
        restaurants.fareManuia,
        "fare"
      )}

    `;

    quickActions.insertAdjacentElement(
      "afterend",
      foodCard
    );

    document
      .getElementById("closeFood")
      .addEventListener(
        "click",
        closeFoodView
      );

  }

  foodCard.style.display = "";

}

function closeFoodView() {

  if (foodCard)
    foodCard.style.display = "none";

  if (todaySection)
    todaySection.style.display = "";

  if (lillyTip)
    lillyTip.style.display = "";

}

/* =========================
   START
   ========================= */

updateWeather();

if (foodButton) {

  foodButton.addEventListener(
    "click",
    openFood
  );

}
