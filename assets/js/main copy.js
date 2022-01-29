import roses_en from './roses_en.js'
import roses_ru from './roses_ru.js'


// let lg = document.querySelector('input[name="lg"]:checked');
// let lg = document.getElementById("lg").value
// console.log("lg", lg.value);

let lg;
// lg ? "en" : "ru"
// const lg = document.querySelectorAll('input[name="lg"]:checked');
// var lgValue = lg.length > 0 ? lg[0].value : "en";

function changeLanguage(lg) {
    // let radioVal;
    const radios = document.querySelectorAll('input[name="lg"]');
    radios.forEach(radio => {
        radio.addEventListener('click', function () {
            // radioVal = radio.value;
            lg = radio.value

            // console.log(radioVal);
            // window.onload = changeLanguage(radioVal.value);

            switch (lg) {
                case "ru":
                    // window.onload = displayCards(roses_ru)
                    displayCards(roses_ru)
                    console.log("switch ru");
                    break;
                case "en":
                    console.log("switch en");
                    // window.onload = displayCards(roses_en)
                    displayCards(roses_en)
                    break;
                default:
                    // displayCards(roses_en)
                    console.log("hmm");
            }

            // if (lg === "ru") {
            //     console.log("ru");
            //     window.onload = displayCards(roses_ru)
            // }
            // else if (lg === "en") {
            //     console.log("en");
            //     window.onload = displayCards(roses_en)
            // }
            // else {
            //     window.onload = displayCards(roses_en)
            //     console.log("something");
            // }
        });
    });
}

changeLanguage(lg);

// console.log("radioVal", radioVal);

// function changeLanguage(lg) {
//     if (lg === "ru") {
//         displayCards(roses_ru)
//     } else {
//         displayCards(roses_en)
//     }

// }


console.log("lg", lg);

// window.onload = changeLanguage(lg);

// window.onload = displayCards(roses_en);

// window.onload = () => {
//     if (lg == "ru") {
//         displayCards(roses_ru);
//     }
//     else {
//         displayCards(roses_en)
//     }
// }


function displayCards(arr) {
    let cardsContainer = document.getElementById("cards-container");
    for (let el in arr) {
        let card = "";
        content += arr[el];
        if (el % 2 == 0) {
            card += `
            <section class="card card-left">
            <div class="card-img-box">
                <img src="./assets/img/frame-flowers-left.png" alt="rose frame" width="300"
                    class="card-img-frame card-img-frame-left">
                <img src="../assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-left"
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
                <img src="../assets/${arr[el].img}" alt="${arr[el].name}" width="120" class="card-img card-img-right">
            </div>
        </section>
            `
        }
        cardsContainer.innerHTML += card;
    }
    return cardsContainer;
};
