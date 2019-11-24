
let dot = require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let moment = require('moment');
let axios = require("axios");
let fs = require("fs");
let type = process.argv[2];
let search = process.argv.slice(3);

let bandsearch = () => {

    let query = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

    console.log(query);

    axios.get(query).then(
        function(response) {

        let object = response.data;
        // console.log(object)

        for (let i = 0; i < object.length; i++) {
            let venue = `
            Venue: ${object[i].venue.name}
            Location: ${object[i].venue.city}, ${object[i].venue.country}
            Date: ${response.data[i].datetime}
            `
            console.log(venue)
            }

        })

};

function spotifysearch() {

    if (!search) {
        search = "The Sign"
        }

    spotify
        .search({ type: 'track', query: search})
        .then(function(response) {

            let object = response.tracks.items
            // console.log(object);

            for (let i = 0; i < 20; i++) {

                let song = `
                Artists: ${object[i].artists[0].name}
                Song: ${object[i].name}
                Preview: ${object[i].preview_url}
                Album: ${object[i].album.name}
                `
                console.log(song)
                }

            })
        .catch(function(err) {
            console.log(err);
        });
    };

let moviesearch = () => {

    if (!search) {
        search= "MR. Nobody"
        };

    let query = "https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

    console.log(query);

    axios.get(query).then(
        function(response) {

        let object = response.data;
        // console.log(object)

        let movie= `
        Title: ${object.Title}
        Year Released: ${object.Year}
        IMDB Rating: ${object.imdbRating}
        Rotten Tomatoes Rating: ${object.Ratings[1].Value}
        Country Produced: ${object.Country}
        Language: ${object.Language} 
        Plot: ${object.Plot}
        Starring: ${object.Actors}   
        `

        console.log(movie);

        })

    };

function text() {

    fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
        }

        var array = data.split(',');
        type = array[0]; 
        search= array[1];

        })
    }



if (type === "concert-this") {
    bandsearch()
    };

if (type === "spotify-this-song") {
    spotifysearch()
    };

if (type === "movie-this") {
    moviesearch()
}

if (type === "do-what-it-says") {
    text()
    };
