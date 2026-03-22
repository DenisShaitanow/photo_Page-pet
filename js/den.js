
    
const slides = document.querySelectorAll('.slider__slide');
const pointsSlides = document.querySelectorAll(".slider__indicator");
const buttonPrev = document.querySelector(".slider__arrow--prev");
const buttonNext = document.querySelector(".slider__arrow--next");

const questions = document.querySelectorAll('.faq-item');

function moveSlide() {

    let i = 0;

   

    buttonPrev.addEventListener('click', () => {
        if ( i === 0 ) {
            slides[i].classList.remove('slider__slide--active');
            slides[slides.length-1].classList.add('slider__slide--active');

            
            pointsSlides[i].classList.remove('slider__indicator--active');
            pointsSlides[slides.length-1].classList.add('slider__indicator--active');
            i = 2;
        } else {
            slides[i].classList.remove('slider__slide--active');
            slides[i-1].classList.add('slider__slide--active');

            pointsSlides[i].classList.remove('slider__indicator--active');
            pointsSlides[i-1].classList.add('slider__indicator--active');
            i-=1;
        }
});


buttonNext.addEventListener('click', () => {
        
       
        if ( i === slides.length - 1 ) {
            slides[i].classList.remove('slider__slide--active');
            slides[0].classList.add('slider__slide--active');

            
            pointsSlides[i].classList.remove('slider__indicator--active');
            pointsSlides[0].classList.add('slider__indicator--active');
            i = 0;
        } else {
            slides[i].classList.remove('slider__slide--active');
            slides[i+1].classList.add('slider__slide--active');

            pointsSlides[i].classList.remove('slider__indicator--active');
            pointsSlides[i+1].classList.add('slider__indicator--active');
            i+=1;
        }
        
    })
}

function moveQuestion() {
    questions.forEach((item) => {
        

        item.addEventListener('click', () => {
            console.log('otkr')
            item.classList.toggle('active');
           

        })
    })
}

moveSlide();
moveQuestion();
