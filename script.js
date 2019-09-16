'use strict';

let html2 = "<p>Start here: </p>";
let html3 = "<p> Right Here</p>";







function fetchAndLog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function fetchRandom() {

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => getHTML2(responseJson))
      .catch(error => alert('Something went wrong. Try again later.' + error));

  }

  function fetchRandomBreed(breed) {
    let request = 'https://dog.ceo/api/breed/'+breed+'/images/random';
    fetch(request)
      .then(response => response.json())
      .then(responseJson => getHTML3(responseJson))
      .catch(error => alert('Something went wrong. Try again later.' + error));

  }

function getHTML2(responseJson) {
    //replace the existing image with the new one
    html = html +
        `	
            <img src="${responseJson.message}" class="results-img">

        `
    ;

}

function getHTML3(responseJson){
    let resp = responseJson.message;
    let badBreaad = "Breed not found (master breed does not exist)";
    if(resp === badBreaad){
        alert('Input Breed is not legit, dude');
        html3 = `
        <img src="data:image/jpeg;base64,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" class="results-img">
    `;
    }else{
        html3 = `
        <img src="${responseJson.message}" class="results-img">
    `;
    }
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForms();
});

function watchForms() {

    $('#js-form-1').submit(event => {
        let numOfDogs = document.getElementById("js-input-1").value;
        event.preventDefault();
    
        for(let i=0; i<numOfDogs; i++){
            fetchAndLog();
        }
    });
    
    
    
    $('#js-form-2').submit(event => {

        let numOfDogs = document.getElementById("js-input-2").value;
        event.preventDefault();
        for(let i=0; i<numOfDogs; i++){
            fetchRandom();
        }
        document.getElementById("product-output").innerHTML = html;
        html = "<p> Dogs: </p>";
    });

    $('#js-form-3').submit(event => {

        let breed = document.getElementById("js-input-3").value;
        event.preventDefault();
        fetchRandomBreed(breed);
        console.log(html3);
        document.getElementById("product-output").innerHTML = html3;
        
    });

}