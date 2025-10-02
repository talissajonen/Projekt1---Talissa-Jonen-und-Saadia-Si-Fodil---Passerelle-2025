const backgrounds = [
  "img/background2.jpg",
  "img/background3.jpg",
  "img/background4.jpg",
  "img/background5.jpg",
  "img/background6.jpg",
  "img/background7.jpg"
];

let current = 0;
const mainImage = document.querySelector(".main-image");

// mostra primeiro background do CSS inicialmente
function startBackgroundLoop() {
    setInterval(() => {
        mainImage.style.backgroundImage = `url(${backgrounds[current]})`;
        current = (current + 1) % backgrounds.length;
    }, 5000);
}

// inicia o loop
startBackgroundLoop();