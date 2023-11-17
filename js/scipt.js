function toggleMenu() { 
  const menuToggle =document.querySelector('.menuToggle');
  const navigation =document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

const toTop = document.getElementsByClassName(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})