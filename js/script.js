const API_URL = "https://orchid-whale-hem.cyclic.app";

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const logoImage = document.getElementById('logoNav');
    header.classList.toggle("sticky", window.scrollY > 0);
      if (scrollY > 0) {
        logoImage.src = './asset/Logo.png'; 
    } else {
        logoImage.src = './asset/Logo.png'; 
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

// contact us 
function setupContactForm() {
  const form = document.getElementById('contact-us');
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formProps),
      });

    if (response.status === 201) {
      Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your message has been successfully sent! Thank you for contacting us.',
          confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Oops! Something went wrong. Your message could not be sent. Please try again later.',
          confirmButtonText: 'OK'
      });
    }

  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Oops! Something went wrong. Your message could not be sent. Please try again later.',
      confirmButtonText: 'OK'
    });
  }
  
});
}