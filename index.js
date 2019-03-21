'use strict';

function getDogImage(x) {
  fetch(`https://dog.ceo/api/breeds/image/random/${x}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch (error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let x = document.querySelector('#quantity').value;
    getDogImage(x);
  });
}

function displayResults(responseJson) {
  $('.results-img').replaceWith(`<img src="" class="results-img fake" alt="placeholder">`)
  responseJson.message.forEach(el => {
    console.log(el);
    $('.results').append(`<img src="${el}" class="results-img">`)
  });
  $('.results').removeClass('hidden');
  $('.fake').addClass('hidden');
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});