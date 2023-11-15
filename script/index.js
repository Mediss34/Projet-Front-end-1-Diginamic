let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Appeler showSlide(0) pour afficher le premier élément
showSlide(0);

// Gérer le bouton Suivant
document.getElementById("suivBtn").addEventListener("click", nextSlide);

// Gérer le bouton Précédent
document.getElementById("preBtn").addEventListener("click", prevSlide);

const videoUrls = [
  "https://www.youtube.com/embed/0bdQEd69ZHo?si=5Ab6HIS1tV6p7ACZ&amp;start=2",
  "https://www.youtube.com/embed/gi_TxGVtRYI?si=ahiiRwNBtcl7Mt4z",
  "https://www.youtube.com/embed/54ZU4SMxhCc?si=BkyRJLGH81Fvg0J2&amp;start=2",
];

const videoCarousel = document.getElementById("videoCarousel");
const preBtn1 = document.getElementById("preBtn1");
const suivBtn1 = document.getElementById("suivBtn1");
let currentIndex = 0;

function showVideo(index) {
  videoCarousel.innerHTML = `<div class="video-card"><iframe src="${videoUrls[index]}" frameborder="0" allowfullscreen></iframe></div>`;
}

function prevVideo() {
  currentIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
  showVideo(currentIndex);
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videoUrls.length;
  showVideo(currentIndex);
}

showVideo(currentIndex);

preBtn1.addEventListener("click", prevVideo);
suivBtn1.addEventListener("click", nextVideo);
