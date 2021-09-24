// GSAP

console.log(window.scrollY);

const portfolio = {};

portfolio.masterTL = gsap.timeline({repeat: -1});
portfolio.navBtn = document.querySelector('.fa-bars');
portfolio.closeNavBtn = document.querySelector('.exit-btn')
portfolio.navMenu = document.getElementById('navigation-container');
portfolio.navLinks = document.querySelector('.nav-link')

portfolio.init = function() {
  portfolio.headerAnimation();
  portfolio.openCloseNav();
  portfolio.TypewriterAnimation();
}

// animation for header
portfolio.headerAnimation = function() {
  gsap.fromTo('.social-icons', {y: 500, opacity: 0}, {duration: 2, y: 0, opacity: 1})
  gsap.fromTo('.nav-button', {y: -1000, opacity: 0}, {duration: 2, y: 0, opacity: 1})
  gsap.fromTo('.hello', {x: -300, opacity: 0}, {duration: 2, x: 0, opacity: 1})
  gsap.fromTo('h1, h2', {x: 300, opacity: 0}, {duration: 2, x: 0, opacity: 1})
}

// opening and closing navigation popup
portfolio.openCloseNav = function() {
  portfolio.navBtn.addEventListener('click', function() {
    portfolio.navMenu.style.display="block";
    gsap.from('.navigation-container', {duration: 0.5, scale: 0.3, ease: "back"})
  })
  portfolio.closeNavBtn.addEventListener('click', function() {
    portfolio.navMenu.style.display="none";
  })

  const theLinks = document.querySelectorAll(".nav-link");
  theLinks.forEach(link => link.addEventListener("click", ()=>{
  portfolio.navMenu.style.display="none";
  }))
}

// typewriter animation in about me section listing skills
portfolio.TypewriterAnimation = function() {
  let skills = ["HTML5.", "CSS3.", "ES6.", "Sass.", "React.", "jQuery.", "Git.", "RESTful API.", "Github.", "A11y.", "Firebase.", "Responsive Design.", "Git Branching.", "Github.", "Pair Programming.", "Command Line.", "Version Control."];
  skills.forEach(function(skill) {
    let tl = gsap.timeline({repeat: 1, yoyo: true});
    tl.to('.text-animation-about', {duration: 1, text: skill})
    portfolio.masterTL.add(tl)
  }) 
}


portfolio.init();