document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.Knopka');
  if (button) {
    button.addEventListener('click', function () {
      window.location.href = 'https://mail.google.com/';
    });
  }
});
