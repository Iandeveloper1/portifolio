// Smooth scrolling when clicking on nav links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
  });
}

// Toggle menu on mobile
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav ul');

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuList.classList.toggle('show-menu');
}

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const data = { name, email, message };

  // Send data to server
  fetch('submit-form.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      alert('Form submitted successfully!');
      form.reset();
    })
    .catch(error => console.error(error));
}

// Image modal
const images = document.querySelectorAll('.project-image');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');

for (const image of images) {
  image.addEventListener('click', openModal);
}

function openModal(event) {
  modal.style.display = 'block';
  modalImg.src = event.target.src;
}

const closeModalBtn = document.querySelector('.close-modal');
closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
}
