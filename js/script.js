// ============ Configuração do slider ============ \\
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let i;

showSlides();

function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 7000); // Muda a imagem a cada 9 segundos
}

function plusSlides(n) {
  slideIndex += n;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
