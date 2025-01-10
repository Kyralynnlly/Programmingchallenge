const showAlertBtn = document.getElementById('showAlert');
const custonAlert = document.geElementById('customAlert');
const confirmBtn = document.getElementById('confirmBtn');

showAlertBtn.addEventListener('click', function(){
    customAlert.style.display = 'flex';
});

confirmBtn.addEventListener('click', function(){
  customAlert.stylr.display = 'none';
});
