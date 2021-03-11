const url = 'http://localhost:3000';

const data = require ('../../server/data')
const createNode = require ('../../server/app');
const append = require ('../../server/app'); 

fetch(url)
.then((resp) => resp.json())
.then(function(data) {

})


function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:3000/quotes')
    .then(resp => resp.text)
    .then(document.getElementById('text').innerHTML = quote)
}

form.addEventListener('submit', getRandomQuote())
