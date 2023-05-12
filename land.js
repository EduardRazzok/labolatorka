// При натисканні на кнопку зберігаємо інформацію про активну кнопку
function changeColorAndNavigate(buttonId, url) {
  var button = document.getElementById(buttonId);
  button.classList.add('active');
  
  // Зберегти інформацію про активну кнопку в localStorage
  localStorage.setItem('activeButton', buttonId);
  
  // Виконати перехід на вказану сторінку
  window.location.href = url;
}

// При завантаженні сторінки перевіряємо, чи є збережена інформація про активну кнопку
window.addEventListener('DOMContentLoaded', function() {
  var activeButtonId = localStorage.getItem('activeButton');
  if (activeButtonId) {
    var button = document.getElementById(activeButtonId);
    button.classList.add('active');
  }
});

