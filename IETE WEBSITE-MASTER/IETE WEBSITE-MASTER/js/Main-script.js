var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
navbar.classList.toggle("showInput");
if(navbar.classList.contains("showInput")){
  searchBox.classList.replace("bx-search" ,"bx-x");
}else {
  searchBox.classList.replace("bx-x" ,"bx-search");
}
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
navLinks.classList.toggle("show3");
}



// typing-effect.js
const textElement = document.getElementById('typing-text');
const texts = [
  "Learning Today, Leading Tomorrow",
  "Embrace Knowledge Today, Lead Tomorrow",
  "Today's Learning, Tomorrow's Leadership",
  "From Learning Today to Leading Tomorrow",
  "Today's Lessons, Tomorrow's Leadership",
  "Learn Today, Lead Tomorrow",
  "Today's Education, Tomorrow's Leadership",
  "Building Today's Skills for Tomorrow's Leadership",
  "Today's Effort, Tomorrow's Leadership",
  "Today's Growth, Tomorrow's Leading"
];

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
  } else {
      setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
      textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 30);
  } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
  }
}

type(); // Start the typing animation


// Counter
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
  function upDate(){
      const target = Number(counter.getAttribute('data-target'))
      const count = Number(counter.innerText)
      const inc = target / speed        
      if(count < target){
          counter.innerText = Math.floor(inc + count) 
          setTimeout(upDate, 15)
      }else{
          counter.innerText = target
      }
  }
  upDate()
})


document.addEventListener('DOMContentLoaded', () => {
  const studentsCounter = document.getElementById('studentsCounter');
  const staffCounter = document.getElementById('staffCounter');
  const eventsCounter = document.getElementById('eventsCounter');
  const collegesCounter = document.getElementById('collegesCounter');

  animateValue(studentsCounter, 0, 12060, 3000);
  animateValue(staffCounter, 0, 13592, 3000);
  animateValue(eventsCounter, 0, 42, 400);
  animateValue(collegesCounter, 0, 15, 400);

  const counterItems = document.querySelectorAll('.counter-item');

  function animateValue(element, start, end, duration) {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentValue = Math.floor(start + percentage * (end - start));
      element.textContent = currentValue;
      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  function animateCounterExit() {
    counterItems.forEach(item => {
      item.style.animation = 'counter-exit 0.1s forwards';
    });
  }

  window.addEventListener('beforeunload', animateCounterExit);
});











const btnScrollToTop =document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
  window.scrollTo({
    top:0,left:0,
      behavior:"smooth"
  });
});