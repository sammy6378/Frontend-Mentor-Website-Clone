

const menu = document.querySelector(".flex-bar");
const bar = document.querySelector(".bar");
const body = document.querySelector(".main");
bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu");
    body.classList.toggle("blur");
});


var image = document.querySelector('.bar-image');

image.addEventListener("click", ()=>{
    if (image.src.includes('align-justify.png')) {
        image.src = './images/close.png';
    } else {
        image.src = './images/align-justify.png';
    }
});

// left and right divs are aligned by default 

const more = document.querySelector('.more');
const left = document.querySelector('.container-left');
const center = document.querySelector('.container-center');

more.addEventListener("click", ()=>{
    left.classList.toggle("show-more");
});

// scrolling to bottom should fix the div at a sticky position
window.addEventListener('scroll', function() {
    var hiringSection = document.getElementById('hiring-section');
    var latestArticlesSection = document.getElementById('latest-articles');

    var hiringSectionRect = hiringSection.getBoundingClientRect();

    if (hiringSectionRect.top <= 0) {
        latestArticlesSection.classList.add('fixed');
    } else {
        latestArticlesSection.classList.remove('fixed');
    }
});

// scroll to bottom and fix the div to be sticky
window.addEventListener('scroll', function() {
    var previousSection = document.getElementById('previous');
    var latestSection = document.getElementById('latest');

    var previousSectionRect = previousSection.getBoundingClientRect();

    if (previousSectionRect.top <= 0) {
        latestSection.classList.add('sticky');
    } else {
        latestSection.classList.remove('sticky');
    }
});


const profile = document.querySelectorAll('#my-profile');
const user = document.querySelector('.user-profile');

profile.forEach(pro =>{
    pro.addEventListener('click', () => {
    user.classList.toggle('show-profile');
});
});


const right = document.querySelector('.container-right');

var originalParent = right.parentElement;

function myFunction(x) {
    if (x.matches) { // If media query matches
        if (!left.contains(right)) {
            left.appendChild(right);
        }        
    } else {
        if (left.contains(right)) {
            left.removeChild(right);
        }
        if (!originalParent.contains(right)) {
            originalParent.appendChild(right);
        }
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1023px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });