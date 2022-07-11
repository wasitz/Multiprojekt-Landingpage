// Banner
const slideList = [{
    img: "img/banner2.jpg"
},
{
    img: "img/banner3.jpg"
},

{
    img: "img/banner4.jpg"
}]

const image = document.querySelector('img.slider');

const time = 3000;
let active = 0;

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
}
setInterval(changeSlide, time);



// Features
const threeFeatures = document.getElementById('threeFeatures');

threeFeaturesAppear = function(){
    console.log(threeFeatures);
    threeFeatures.style.transform = "scale(1)";
}


// CMT scroll scrollElements
const cmtScrollLeft = document.querySelectorAll('.js-scroll-left');
const cmtScrollRight = document.querySelectorAll('.js-scroll-right');
const cmtScrollOpacity = document.querySelectorAll('.js-scroll-opacity');


const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  threeFeaturesAppear();
 
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