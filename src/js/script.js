// Trouver l'élément avec l'ID "a-mettre-en-rouge"
const aMettreEnRouge = document.querySelector('#a-mettre-en-rouge')

// Changer la couleur du texte de cet élément
aMettreEnRouge.style.color = 'red'



// --- Réagir à un click sur le bouton ---
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

enRougeSuiteAClick.addEventListener("click", (evt) => {
    enRougeSuiteAClick.style.color = "red";
});

// --- Réagir à un click sur les H2 ---
const collH2 = document.querySelectorAll("h2");

collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red";
    });
});
