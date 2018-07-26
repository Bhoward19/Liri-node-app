require("dotenv").config();


// Spotify --------------------------------------------
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
var spotifyThisSong = process.argv[2];
var mySong = process.argv[3];

if (spotifyThisSong === 'spotify-this-song' && mySong) {
  console.log("Getting your song...")
  getSong();
} 

else if (spotifyThisSong === 'spotify-this-song' && mySong != true) {
  theSign();
}

function getSong() {
  spotify.search({ type: 'track', query: mySong}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(JSON.stringify(data, null, 2)); 
  });
}

function theSign() {
  spotify.search({ type: 'track', query: 'The Sign'}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(JSON.stringify(data, null, 2)); 
  });
}


//OMDB----------------------------------------------------------


var movieThis = process.argv[2];
var movieName = process.argv[3];


if (movieThis === 'movie-this' && movieName) {
  console.log("It's working!")
 
  getMovie();

} else if (movieThis === 'movie-this' && movieName != true) {

  console.log("Fine then, let's learn about Mr. Nobody.")
  mrNobody();

} 
function getMovie() {
  var request = require("request");
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  console.log("URL: " + queryUrl);
  request(queryUrl, function(error, response, body) {
  
  if (!error && response.statusCode === 200) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);

  }
});
  
}

function mrNobody() {
  var mrNobodyMovie = "mr nobody";
  var request = require("request");
  var queryUrl = "http://www.omdbapi.com/?t=" + mrNobodyMovie + "&y=&plot=short&apikey=trilogy";

  console.log("URL: " + queryUrl);

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
    
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
  
};

var fs = require('fs');

var doWhatItSays = process.argv[2];


if (doWhatItSays === 'do-what-it-says') {
  myFunction();
}

function myFunction() {

  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    dataArr = data.split(',')
    console.log( dataArr[0] + " " + dataArr[1]);
    mySong = dataArr[1];

    if (dataArr[0] === 'spotify-this-song' && mySong) {
    
      getSong();
      
    }
  });

 

  }
