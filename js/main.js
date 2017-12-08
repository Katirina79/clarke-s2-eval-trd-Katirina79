'use strict'
var counter = 0;
var resultRandom = getRandomIntInclusive(0,100);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

function init(){
  var button = document.querySelector('.test-the-number');
  button.addEventListener('click',checkNumber);
  var saveButton = document.querySelector('.save-button');
  saveButton.addEventListener('click', onclickButton);
}

function checkNumber() {
    var userNumber = document.querySelector('.number');
    var message = document.querySelector('.message-gide');
    var container = document.querySelector('.container');
    var userNumberValue = userNumber.value;
    var numberconverse = parseInt(userNumberValue);

    counter += 1;
    container.innerHTML = counter;
    if (numberconverse > resultRandom){
    message.innerHTML = 'demasiado alto';
  }else if (numberconverse < resultRandom){
    message.innerHTML = 'demasiado bajo';
  }else{
    message.innerHTML = 'acertado';
    var userName = document.querySelector('.user-input-name');
    userName.classList.toggle('hidden');
  };
};

function onclickButton() {
  historyList();
  resetGame();
}

function historyList() {
  var userName = document.querySelector('.user-input-name .name');
  var userNameValue = userName.value;
  var historyInfo = document.querySelector('.history-information');
  historyInfo.innerHTML += '<li>' + userNameValue + '-' + counter +' intentos</li>';
};

function resetGame() {
    var userName = document.querySelector('.user-input-name');
    var container = document.querySelector('.container');
    var userNumber = document.querySelector('.number');
    var message = document.querySelector('.message-gide');

    counter = 0;
    container.innerHTML = '0';
    message.innerHTML = '<p>Escribe un número y dale a <em>Prueba</em></p>';
    userName.classList.add('hidden');
    userName.querySelector('.name').value = '';
    userNumber.value = '';
    resultRandom = getRandomIntInclusive(0,100);
};

init();
