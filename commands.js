// Initializing dependencies
var Request = require('request');
var Keys = require('keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

// Method used to pull users' tweets from Twitter.
var Tweet = function (handle, Tweetcount) {

	var Parameters = {
		screen_name: handle,
		count: Tweetcount
	};

	var Tweeter = new Twitter(Keys.tweetKeys);

	Tweeter.get('statuses/user_timeline', Parameters, function (err, tweets, response){
		if (!error) {
			tweets.forEach(function (tweet){
				console.log("Time Posted: " + tweet.created_at + "///" + tweet.text);
			})
		}
		else {
			console.log("Error, does not compute....");
		}
	});
}

// End of Tweet Method

// LIRIfy method allows you to take advantage of their extensive music database
var LIRIfy = function (songTitle) {

	var object = new Object();
	var spotify = new Spotify(Keys.SpotKeys);

	spotify.search({
		type: 'track',
		query: songTitle
	},
	function (err, data) {
		if (err) {
			return console.log('Error: ' + err);
		}

		var newSong = data.tracks.items;

		newSong.forEach(function (thisSong) {

			var artistArray = thisSong.artists;
			var artists;
			artistArray.forEach(function (artistsName) {
				object.artists = [];
				object.artists.push(artistsName.name);
			})

		object.songName = thisSong.name;
		object.songLink = thisSong.href;
		object.album = thisSong.album.name;

		console.log(object);
		})
	});
}
// End of LIRIfy method ... 

// Exports 

exports.Tweet = Tweet;
exports.LIRIfy = LIRIfy;