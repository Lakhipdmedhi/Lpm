function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add code to handle form submission, e.g., send data to a server
    alert('Form submitted successfully!');
    contactForm.reset();
  });
});

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'flex';
}

function closePopup() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    popup.style.display = 'none';
  });
}






// Optional JavaScript code for specific functionality

// Get all image items and their descriptions
const imageItems = document.querySelectorAll('.image-item');

// Loop through each image item and add event listeners
imageItems.forEach(item => {
  const image = item.querySelector('img');
  const description = item.querySelector('.image-description');

  // Show description on hover
  item.addEventListener('mouseenter', () => {
    item.style.opacity = 1;
    image.style.transform = 'scale(1.2)';
    description.style.opacity = 1;
  });

  // Hide description on mouse leave
  item.addEventListener('mouseleave', () => {
    item.style.opacity = 1;
    image.style.transform = 'scale(1)';
    description.style.opacity = 0;
  });
});



/*function initMap() {
  const myLatLng = { lat: 40.7128, lng: -74.0060 }; // Replace with your latitude and longitude
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My Location",
  });
}*/
