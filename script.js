let carouselSlide = document.querySelector('.Carousel-Slider');
let carouselImages = document.querySelectorAll('.Carousel-Slider img');

let prev = document.querySelector('#Previous');
let next = document.querySelector('#Next');

let counter = 1;

let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', function(e){
   if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition='transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', function(e){
    if (counter <= 0) return;
    carouselSlide.style.transition='transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', function(e){

    if (carouselImages[counter].id === 'last_clone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    };
    console.log(carouselImages[counter])
    console.log(counter)
    if (carouselImages[counter].id === 'first_clone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    
    
})