//Maybe that's what I should do, is create separate files for each axios call to make sure they work separately, might be a better way to organize and attack the problem, that way, I can make that separate file and merge that with the master. 

//dotenv package downloaded, listed in dependencies
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
//Seeing console.log "this is loaded" when running node liri.js. But had to comment this out since if caused an error.
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
var fs = require("fs");
//moment Node package
var moment = require("moment");

var userChoice = process.argv[2];
var entertainName = process.argv;
//console.log(entertainName);



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
//console.log(userChoice);

function concert() {

    var artist = "";

    for (var i = 3; i < entertainName.length; i++) {

        if (i > 3 && i < entertainName.length) {
            artist = artist + "+" + entertainName[i];
        } else {
            artist += entertainName[i];

        }
    };
    //console.log(artist);


    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Venue Name: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + "," + response.data[0].venue.region);
            console.log("Date of Event: " + response.data[0].datetime);
        }).catch(function (err) {
            console.log(err);
        });
    //TODO: Still need moment to format date.
}

function song() {



    var song = "";

    for (var i = 3; i < entertainName.length; i++) {

        if (i > 3 && i < entertainName.length) {
            song = song + "+" + entertainName[i];
        } else {
            song += entertainName[i];

        }
    };


    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Song " + data.tracks.items[0].preview_url);
        console.log("Album Name: " + data.tracks.items[0].album.name);

    });



}

function movie() {

    var movieName = "";

    for (var i = 3; i < entertainName.length; i++) {

        if (i > 3 && i < entertainName.length) {
            movieName = movieName + "+" + entertainName[i];
        } else {
            movieName += entertainName[i];

        }
    };
    //console.log(movieName);

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    //console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            //TODO: Could format the console.log the way we were doing it in some of the constructor activities.
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country of Origin: " + response.data.Country);
            console.log("Language of Movie: " + response.data.Language);
            console.log("Plot of Movie: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);

            //TODO: Need to correct this if statement to make sure if someone does not enter the movie, it returns Mr. Nobody.
            if (movieName === "") {
                queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
                movieName += queryUrl;
                console.log("Title: " + response.data.Title);
            }


        })/*.catch(function (err) {
            queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
            movieName += queryUrl;
            console.log(movieName);

        });*/




}

function dowhat() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        data = data.split(", ");
        var result = "";

        for (var i = 3; i < data.length; i++) {
            if (data[i]) {
                result += data[i];
            }
        }
        console.log(result);

        //var dataArr = data.split(",");

        /*for (var i = 0; i < dataArr.length; i++) {
        
            console.log(dataArr);
        }*/

        //TODO: Not sure what else needs to be done with this one. Maybe need to see what someone elses output looks like.

    });


}



