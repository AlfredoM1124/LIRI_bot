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