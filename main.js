


// Features
const threeFeatures = document.getElementById('threeFeatures');

threeFeaturesAppear = function(){
    threeFeatures.style.top = "0px";
    threeFeatures.style.backgroundColor = "white";
}


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

document.addEventListener("DOMContentLoaded", threeFeaturesAppear());