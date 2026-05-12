// script.js

// Smooth Scroll Animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

  });

});


// Navbar Shadow on Scroll

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  }else{
    navbar.style.boxShadow = "none";
  }

});