const express = require('express');
const app = express();
const port = 3000;
const quotes = require('./data');

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.listen(port, () => console.log(`I am here! Find me running on ${port}`));

app.get('/', (request, response)=>{
  response.send('Hello! In a moment you will see quotes to motivate you for the day!'); //sends data to the browser
});

app.get('/quotes', (req, res)=> {
  res.send(quotes);
});

const index = function giveQuote() {
  let index = Math.floor(Math.random() * quotes.length);

  return index;
}

const randomQuote = () => {
  let randomQuote = quotes[index()];
  return randomQuote;
}
app.get('/quotes/random', (req, res)=>{
  res.send (quotes[index()]);
});
  
app.get('/quotes/:index', (req, res) => {
  let err = {error: `Choose a number between 1 and ${quotes.length}`}
    if (req.params.index > 0 && req.params.index <= quotes.length) {
    res.send(quotes[req.params.index-1])
  } else { 
    console.log('status 500') 
    res.send (err);
  };
  });

