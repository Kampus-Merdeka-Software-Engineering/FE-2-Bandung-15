window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const logoImage = document.getElementById('logoNav');
    header.classList.toggle("sticky", window.scrollY > 0);
      if (scrollY > 0) {
        logoImage.src = './assets/logo-navbar-white.png'; 
    } else {
        logoImage.src = './assets/logo-navbar-orange.png'; 
  }
});

function toggleMenu() { 
  const menuToggle =document.querySelector('.menuToggle');
  const navigation =document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

function fitur(fitur) {
    var i;
    var x = document.getElementsByClassName("fitur");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(fitur).style.display = "block";  
  }