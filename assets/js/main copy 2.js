import roses_en from './roses_en.js'
// import roses_ru from './roses_ru.js'



// console.log("navigator.browserLanguage", navigator.language);
// let language = navigator.language;
// language = language.substr(0, 2).toLowerCase();
// lang = "ru"

let language = document.documentElement.lang;
console.log("lang", language);


// override lang by btn click
let btnRu = document.getElementById("ru")
// console.log("btn ru", btnRu.value);
// btnRu.addEventListener("click", () => {
//     language = "ru"
//     console.log("language", language);
//     window.onload = displayCards(roses_ru);
// })

let btnEn = document.getElementById("en")
// btnEn.addEventListener("click", () => {
//     language = "en"
// })



// var language = document.documentElement.lang
// switch (language) {
//     case en: document.documentElement.lang = 'en'; break;
//     case ru: document.documentElement.lang = 'ru'; break;
//     default: console.log("def");
// }


function toggleLang(l) {
    var m = document.querySelector('main');
    m.setAttribute('lang', l);

    console.log("main", m);

    if (language == "ru") {
        // window.onload = displayCards(roses_ru);
        displayCards(roses_ru);
    } else if (language == "en") {
        // window.onload = displayCards(roses_en);
        displayCards(roses_en);
    } else {
        console.log("else");
    }
}

btnRu.addEventListener("click", toggleLang("ru"))
btnEn.addEventListener("click", toggleLang("en"))


if (language == "ru") {
    window.onload = displayCards(roses_ru);
} else if (language == "en") {
    window.onload = displayCards(roses_en);
} else {
    console.log("else");
}






window.onload = displayCards(roses_en);

function displayCards(arr) {
    let cardsContainer = document.getElementById("cards-container");
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
                <img src="/assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-right">
            </div>
        </section>
            `
        }
        cardsContainer.innerHTML += card;
    }
    return cardsContainer;
};
