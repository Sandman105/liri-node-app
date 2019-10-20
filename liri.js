//Maybe that's what I should do, is create separate files for each axios call to make sure they work separately, might be a better way to organize and attack the problem, that way, I can make that separate file and merge that with the master. 

//dotenv package downloaded, listed in dependencies
require("dotenv").config();

var keys = require("./keys.js");

//Seeing console.log "this is loaded" when running node liri.js
//var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
var fs = require("fs");

var userChoice = process.argv[2];
var entertainName = process.argv;
console.log(entertainName);



//Need to use the switch case statement here for each 
//The switch-case will direct which function gets run.
//Make it so liri.js can take in one of the following commands:

switch (userChoice) {

    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        song();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        dowhat();
        break;

}
console.log(userChoice);

function concert() {
    
    var artist = "";


    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    axios.get(queryUrl).then(
        function (response) {
            console.log("Test: " + venue[i]);
        });

}

function song() {

    var queryUrl = "https://api.spotify.com/v1/search?query=/"

}

function movie() {

    var movieName = "";

    for (var i = 3; i < entertainName.length; i++) {

        if (i > 3 && i < entertainName.length) {
            movieName = movieName + "+" + entertainName[i];
        } else {
            movieName += entertainName[i];

        }
    }
    console.log(movieName);

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Source.Value);
            console.log("Country of Origin: " + response.data.Country);
            console.log("Language of Movie: " + response.data.Language);
            console.log("Plot of Movie: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        });

        /*if (movieName === "") {
            console.log()
        }   then return movie, Mr. Nobody*/

}

function dowhat() {


}



