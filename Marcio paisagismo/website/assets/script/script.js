//***** nav bar *****//

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

//***** projetos *****//

function showInfoBox() {
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = 'block';

    // Adicione um evento para ocultar a caixa de informações quando o cursor sai
    document.querySelector('.navbar a:not(:hover)').addEventListener('mouseout', function () {
        infoBox.style.display = 'none';
    });
}

//***** Carrousel *****//

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('#carousel img');
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('#carousel img');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('#carousel img');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 3000);

