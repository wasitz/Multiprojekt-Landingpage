


// Features
const card1 = document.querySelector('.card1').style.top = "0px";
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');


// appearCard1 = function(){
//     card1.style.top = "0px";
// }


// CMT scroll scrollElements
const cmtScrollLeft = document.querySelectorAll('.js-scroll-left');
const cmtScrollRight = document.querySelectorAll('.js-scroll-right');
const cmtScrollOpacity = document.querySelectorAll('.js-scroll-opacity');


const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
  );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
}

const scrollAnimation = () => {
    cmtScrollLeft.forEach((el)=>{
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }

    }),
    cmtScrollRight.forEach((el)=>{
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    }),
    cmtScrollOpacity.forEach((el)=>{
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });

}

window.addEventListener('scroll', ()=>{
    scrollAnimation();
})

// document.addEventListener("DOMContentLoaded", appearCard1());
// setTimeout(appearCard1(), 1000);
// setTimeout(appearCard1(), 1000);
// setTimeout(appearCard1(), 1000);