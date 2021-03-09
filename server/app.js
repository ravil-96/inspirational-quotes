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

const quotes = {
  quote1:'"PERFECT IS THE ENEMY OF GOOD." –VOLTAIRE',
  quote2:'"I’M STILL LEARNING." –MICHELANGELO',
  quote3:'"LIFE IS A JOURNEY, NOT A DESTINATION." –RALPH WALDO EMERSON',
  quote4:'"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." ―ABIGAIL ADAMS',
  quote5:'"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." –RUMI',
  quote6:'"BE CURIOUS, NOT JUDGMENTAL." –WALT WHITMAN',
  quote7:'"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." –ZIG ZIGLAR',
  quote8:'"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." –UNKNOWN',
  quote9:'"NOTHING WILL WORK UNLESS YOU DO." –MAYA ANGELOU',
  quote10:'"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." –EARL NIGHTINGALE',
  quote11:'"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." —HENRY FORD',
  quote12:'"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." –BENJAMIN FRANKLIN',
  quote13:'"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." ―LEO BUSCAGLIA',
  quote14:'"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." ―MAHATMA GANDHI',
  quote15:'"A LEARNING CURVE IS ESSENTIAL TO GROWTH." –TAMMY BJELLAND'
}

function getRandomQuote () {
  return quotes[4]
} //*

//app.use(cors());

//app.get('/', (req, res) => res.send('Hello World!'))

// To do: Create a route for retrieving all quotes

// To do: Create a route for retrieving a random quote

// To do: Add handling for out-of-range index
//app.get('/quotes/:index', (req, res) => res.send(quotes[req.params.index]))

// To do: Get the server running


