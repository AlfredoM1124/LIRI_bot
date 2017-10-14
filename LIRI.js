// Initializing dependencies
var Require = require('require');
var Request = require('request');
var Inquirer = require('inquirer');
var fs = require('fs');
var Keys = require('keys.js');
var Commands = require('commands.js');

var Argument = process.argv[2];

// Assign LIRI commands for API functionality

if (Argument === "tweets") {

	var userName = process.argv[3];
	var numTweets;

	if (isNaN(parseInt(process.argv[4]))) {
		numTweets = 15;
	}
	else{
		numTweets = parseInt(process.argv[4]);
	}
	// Access commands.js to use Tweet method on line 8
	Commands.Tweet(userName, numTweets);
} 
else if (Argument === "spotify-song") {

	var songName;

	// If no song is entered play "It's A Small World"
	if (typeof process.argv[3] === 'undefined') {
		console.log("You need to type a song name! Here is my favorite!");
		songName = "It's A Small World";
	}
	else {
		songName = process.argv[3];
	}
	// Access commands.js file to use LIRIfy method on line 32
	Commands.LIRIfy(songName);
} else if (command === "movie-this") {

    var movieTitle;

    // Sets default movie when argument is blank
    if (typeof process.argv[3] === 'undefined') {
        console.log("No Movie Entered! Reverting to defaults...\n");
        movieTitle = "Mr.Nobody";
    } else {
        movieTitle = process.argv[3];
        movieTitle.split(' ').join('+');
    }
    // Access command.js file to use movieThis method on line 69
    Commands.movieThis(movieTitle);

	} else if (Argument === "magic-trick") {

    // Asynch functionality for text file
    fs.readFile('Words.txt', "utf8", function (err, data) {
        if (err) {
            return console.error(err);
        }

        var dataString = data.toString();
        var dataArray = dataString.split(',');
        console.log("Command: " + dataArray[0] + "\nValue: " + dataArray[1]);

        if (dataArray[0] == "tweets") {

            var userName = dataArray[1];
            var numTweets;

            if (dataArray[2] === undefined) {
                numTweets = 15;
            }
            else {
                numTweets = parseInt(dataArray[2]);
            }

            Commands.Tweet(userName, numTweets);

        } else if (dataArray[0] === "spotify-song") {
       
            var songName;

            if (dataArray[1] === 'undefined') {
                console.log("You need to type a song name! Here is my favorite!");
                songName = "It's A Small World";
            } 
            else {
                songName = dataArray[1];
            }

            Commands.LIRIfy(songName);

            } else if (dataArray[0] == "movie-this") {

            var movieTitle;

            if (dataArray[1] === 'undefined') {
                console.log("No Movie Entered! Choosing for you...\n");
                movieTitle = "Mr.Nobody";
            } else {
                movieTitle = dataArray[1];
                movieTitle.split(',').join('+');
            }

            Commands.movieThis(movieTitle);

        }
    });
   	} else {
   		console.log("ERROR ERROR 0101100101001010: DOES NOT COMPUTE! *EXPLODES*");
   	}