// Initializing dependencies
var Request = require('request');
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
}