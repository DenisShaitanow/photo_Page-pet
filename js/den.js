
    
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

function animationContacts() {
    document.addEventListener('DOMContentLoaded', () => {
        const contactSection = document.getElementById('contact');
        const contactCards = document.querySelectorAll('#contacts .contact-card');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              contactCards.forEach(card => {
                card.classList.add('animate-in');
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        
        if (contactSection) {
          observer.observe(contactSection);
        }
      });
}

function animationSteps() {  
    document.addEventListener('DOMContentLoaded', () => {
        const processSection = document.getElementById('process');
        const steps = document.querySelectorAll('#process .process-step');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              steps.forEach(step => {
                step.classList.add('animate-in');
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        if (processSection) {
          observer.observe(processSection);
        }
      });
}

function startAutoSlide() {
    setInterval(() => {
        // Имитируем клик по кнопке "следующий слайд"
        buttonNext.click();
    }, 6000); // 3000 миллисекунд = 3 секунды
}

function headerButtons() {
    const headerButtons = document.querySelectorAll('.nav__link');

    headerButtons.forEach((button) => {
        button.addEventListener('click', () => {
            headerButtons.forEach((button) => {
                button.classList.remove('nav__link--active');
            })
            button.classList.add('nav__link--active');

            
        })
    })
}


moveSlide();
moveQuestion();
animationSteps();
animationContacts();
startAutoSlide();
headerButtons();


