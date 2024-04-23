'use strict';

// ============== Вызов формы ================= //

const startProjectForm = document.querySelector('.start-project-overlay');
const startProjectButton = document.querySelectorAll('.js-startproject')
const closebutton = document.querySelector('.js-closebutton');
startProjectButton.forEach(el => {
  el.addEventListener('click', (e) => {
    startProjectForm.classList.add('is-active');
  })
})
closebutton.addEventListener('click', () => {
  startProjectForm.classList.remove('is-active');
})

// ==================== Toogle Mobil Menu ======================== //

const bodyPage = document.querySelector('body');
const navToogleOpen = document.querySelector('.nav-toggle');
navToogleOpen.onclick = function(){
  bodyPage.classList.toggle("menu-open");
}

// ======================= Header Scroll Bottom ============================= //

let lastScroll = 0;
const defaultOffset = 40;
const header = document.querySelector('.header');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', () => {
    if(scrollPosition() > defaultOffset) {
      header.classList.add('header--bg');
    }
    else if(scrollPosition() < defaultOffset){
      header.classList.remove('header--bg');
    }
    lastScroll = scrollPosition();
})

// =================== Scroll To Anchor ==================== // 

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  })
}

// ================= Animate Title =================== //

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}
let options = {
  threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

// ================ Checked Form ================ //

let formbutton = document.querySelector('[name="formbutton"]');
let formcheck = document.querySelector('[name="formcheck"]');
formbutton.setAttribute('disabled', true);
formcheck.oninput = function() {
  if(formcheck.checked) {
    formbutton.removeAttribute('disabled');
  } else {
    formbutton.setAttribute('disabled', true);
  }
};

// ================ Limit Enter ================ //

const inputs = document.querySelectorAll('.large');
const maxLengthInput = 50;
for (const input of inputs) {
  input.addEventListener('input', function() {
    if (this.value.length > maxLengthInput) {
      this.value = this.value.substring(0, maxLengthInput);
    }
  });
}

const textarea = document.getElementById('message-contact');
const maxLength = 250;
textarea.addEventListener('input', function() {
  if (this.value.length > maxLength) {
    this.value = this.value.substring(0, maxLength);
  }
});

