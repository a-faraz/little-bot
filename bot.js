const Twit = require('twit');
const config = require('./config');
const txtgen = require('txtgen');
const T = new Twit(config);

setInterval(() => {
  
  // Interval between hour 10 and 11
  const hour = new Date().getHours();
  if (hour >= 10 && hour < 11) {
    justTweetIt();
  }
} , 1000*60*60);


function justTweetIt () {

  // Generating the random sentence
  let sentence = txtgen.sentence();

  // Posting the tweet
  T.post('statuses/update', { status: sentence }, (err, data, response) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Data: ', data);
    }
  });

};
