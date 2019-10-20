//dotenv package downloaded, listed in dependencies
require("dotenv").config();

var keys = require("./keys.js");

//Seeing console.log "this is loaded" when running node liri.js
var spotify = new Spotify(keys.spotify);

var axios = require("axios");


/* Make it so liri.js can take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says` */



