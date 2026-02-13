
const body = document.body
const button = document.getElementById("Night_Mode_btn");
const place_card = document.querySelectorAll(".place_card");
const food_section = document.getElementById("Food");
const hangout_section = document.getElementById("Hangout");
const heading_text = document.getElementById("which_mode");

button.addEventListener("click", () => {
    body.classList.toggle("night_mode");
    body.classList.toggle("day_mode");
    const is_night = body.classList.contains("night_mode");
    /* Call the night mode here  */
    const food_catphrase = food_section.querySelector("p");
    const hangout_catphrase = hangout_section.querySelector("p");
    if (is_night) {
        /*Not the best catphrase rn */
        food_catphrase.textContent =  "Nights made for celebrating together";
        hangout_catphrase.textContent = "When the lights come on and the city comes alive";
        heading_text.textContent = "Day Mode";

    } else {
        food_catphrase.textContent = "Made for calm morning";
        hangout_catphrase.textContent = "With good vibes and golden light";
        heading_text.textContent = "Night Mode";
    }

    place_card.forEach(place_card => {
        const img = place_card.querySelector("img");
        const title = place_card.querySelector("h3");
        const info = place_card.querySelector("p");

        if (is_night) {
            /*can probab;y add everything in this */
            img.src = place_card.dataset.nightImage;
            title.textContent = place_card.dataset.nightTitle;
            info.textContent = place_card.dataset.nightInfo;
        } else {
            img.src = place_card.dataset.dayImage;
            title.textContent = place_card.dataset.dayTitle;
            info.textContent = place_card.dataset.dayInfo;
        }
    });
});