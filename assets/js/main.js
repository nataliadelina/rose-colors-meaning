import roses_en from './roses_en.js'
import roses_ru from './roses_ru.js'

let html = document.querySelector('html');
// let language = document.documentElement.lang;
// let cardsContainer = document.getElementById("cards-container");
let cardsEn = document.getElementById("cards-en");
let cardsRu = document.getElementById("cards-ru");
let btnRu = document.getElementById("ru");
let btnEn = document.getElementById("en");

// btn en
btnEn.addEventListener("click", () => {
    html.setAttribute('lang', "en");
    document.documentElement.lang = "en";
    displayCards(roses_en)
});

// btn ru
btnRu.addEventListener("click", () => {
    html.setAttribute('lang', "ru");
    document.documentElement.lang = "ru";
    displayCards(roses_ru)
});

// display cards
function displayCards(arr) {
    let cardsContainerEn = document.getElementById("cards-container_en");
    let cardsContainerRu = document.getElementById("cards-container_ru");
    for (let el in arr) {
        let card = "";
        if (el % 2 == 0) {
            card += `
            <section class="card card-left">
            <div class="card-img-box">
                <img src="./assets/img/frame-flowers-left.png" alt="rose frame" width="300"
                    class="card-img-frame card-img-frame-left">
                <img src="./assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-left"
                    id="card-img-left-1">
            </div>
            <div class="card-content">
                <h2>${arr[el].name}</h2>
                <p>${arr[el].meaning}</p>
            </div>
        </section>
        `
        } else {
            card += `
            <section class="card card-right">
            <div class="card-content">
            <h2>${arr[el].name}</h2>
            <p>${arr[el].meaning}</p>
            </div>
            <div class="card-img-box">
                <img src="./assets/img/frame-flowers-right.png" alt="rose frame" width="300"
                    class="card-img-frame card-img-frame-right">
                <img src="./assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-right">
            </div>
        </section>
            `
        }
        // lang template
        if (arr[0].name.includes("Red Roses")) {
            cardsContainerEn.innerHTML += card;
            // cardsContainer.innerHTML += card;
        }
        else {
            cardsContainerRu.innerHTML += card;
        }
    }
    // cards visibility
    if (arr[0].name === "Red Roses") {
        cardsEn.style.display = "inherit";
        cardsRu.style.display = "none";
        return cardsEn;
    }
    else if (arr[0].name === "Красные Розы") {
        cardsRu.style.display = "inherit";
        cardsEn.style.display = "none";
        return cardsRu;
    }
    else {
        console.log("something went wrong");
    }
    // return cardsContainer;

};

// displayCards(roses_en)
