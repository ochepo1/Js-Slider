let slider = document.getElementById("slider");
const totalSlides = slider.children.length;
const nextSlide = document.getElementById("next");
const prevSlide = document.getElementById("prev");


let index = 0;

let interval = setInterval(autoSlide, 3000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000)
}

// This block is for the slider itself.

function autoSlide() {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// This block is for the button to view next slide.

nextSlide.addEventListener("click", ()=>{
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
    resetInterval();
});

// This block is for the button to return to previous slide.

prevSlide.addEventListener("click", ()=>{
    index = (index - 1) % totalSlides;
    slider.style.transform = `translateX(+${index * 100}%)`;
    resetInterval();
})