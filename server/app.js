const express = require('express');
//const http = require('http');
const server = express();

const cors = require('cors');
server.use(cors());

const port = 3000
const host = 'localhost'

//const requestListener = function (req, res) {
  //res.setHeader("Content-Type", "text/html");
  //res.writeHead(200);
  //res.end(`<html><body><h1>This is HTML</h1></body></html>`);
//};

//const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`I am here! Find me running on http://${host}:${port}`);
});

function getRandomQuote () {
  return quotes[4]
} 

function giveQuote(array) {
  let quote = array[Math.floor(Math.random() * array.length)];

  return quote;
}

function getRandomQuote() {
  return giveQuote(quotes[quote]);
}

server.get('/quotes', (req, res) => res.send(quotes));

// To do: Create a route for retrieving all quotes

// To do: Create a route for retrieving a random quote

// To do: Add handling for out-of-range index
//app.get('/quotes/:index', (req, res) => res.send(quotes[req.params.index]))

// To do: Get the server running


