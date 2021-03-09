const express = require('express');
const server = express();

const Quote = require('./data');

const cors = require('cors');
server.use(cors());

const port = 3000
const host = 'localhost'

server.listen(port, host, () => {
  console.log(`I am here! Find me running on http://${host}:${port}`);
});

function giveQuote(array) {
  let quote = array[Math.floor(Math.random() * array.length)];

  return quote;
}

function getRandomQuote() {
  return giveQuote(Quote[quote]);
}

// To do: Create a route for retrieving all quotes
server.get('/Quote', (req, res) => {
  const quotesData = Quote.all;
  res.send(quotesData);
})

// To do: Create a route for retrieving a random quote
server.get('/Quote', (req, res) => {
  const quotesData = Quote[quote];
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

