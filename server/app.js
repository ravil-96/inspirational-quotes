const express = require('express');
const app = express();
const port = 3000;
const quotes = require('./data');

const cors = require('cors');
const { response } = require('express');
app.use(cors());

app.use(express.json());

app.listen(port, () => console.log(`I am here! Find me running on ${port}`));

const randomQuoteID = function giveQuote(array) {
  let index = array[Math.floor(Math.random() * array.length)];

  return index;
}

function getRandomQuote() {
  return giveQuote(quotes[randomQuoteID]);
}

// To do: Create a route for retrieving all quotes

app.get('/quote', (request, respose)=>{
   response.json(quotes);
});

// To do: Create a route for retrieving a random quote
app.get('/quote/:index', (request, response)=>{
  const quotesData = Number(request.params.getRandomQuote);
  res.send(quotesData)
})






// To do: Add handling for out-of-range index
server.get('/Quote/:index', (req, res) => {
  res.send(quotes[req.params.index])
})
server.param('Quote/:index', (req, res, next, id) => {
  Quote.find(id, function (err, quote) {
    if (err) {
      next('out of range index')
    } else if (quote) {
      req.quote = quote
      next()
    } else {
      next(new Error('failed to load quote'))
    }
  })
})
// To do: Get the server running

//Got the server running. Could not fix get request.

