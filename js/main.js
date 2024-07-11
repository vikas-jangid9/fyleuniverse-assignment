document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const dots = document.querySelectorAll(".dot");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const index = card.getAttribute("data-index");

            cards.forEach(card => card.classList.remove("highlighted"));
            card.classList.add("highlighted");

            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        });
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = dot.getAttribute("data-index");

            cards.forEach(card => card.classList.remove("highlighted"));
            cards[index].classList.add("highlighted");

            dots.forEach(dot => dot.classList.remove("active"));
            dot.classList.add("active");
        });
    });
});

function showImage(imageSrc, element) {
    document.getElementById('project-image').src = imageSrc;
    
    var textBlocks = document.querySelectorAll('.text-block');
    textBlocks.forEach(function(item) {
        item.classList.remove('active');
    });
    
    element.classList.add('active');
}