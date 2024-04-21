'use strict';

const form = document.querySelector('#modal-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'sendform.php');
  xhr.send(new FormData(form));
  xhr.onload = function() {
    if (xhr.status === 200) {
      form.reset();
      document.querySelector(".success span").innerHTML = xhr.responseText;
      document.querySelector(".success").classList.add("success-mail");
      setTimeout(function() {
        document.querySelector(".success").classList.remove("success-mail");
        document.querySelector(".success").style.display = "none";
      }, 5000);
    } else {
      alert(xhr.statusText);
    }
  };
});
