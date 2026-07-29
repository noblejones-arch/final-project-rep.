const form = document.getElementById('myForm');
const message = document.getElementById('helpMessage');

form.addEventListener('submit', function(event) {
  // Stops the page from refreshing
  event.preventDefault(); 
  
  // Reveals the message
  message.classList.remove('hidden'); 
});