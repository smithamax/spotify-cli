#!/usr/bin/env node

var client = require('spotify-node-applescript');
var cli = require('cli').enable('version');

cli.setApp('./package.json');

cli.parse(null, ['play', 'pause', 'next', 'previous', 'status']);

function nowPlaying() {
	client.getTrack(function(err, track) {
		if (err || !track) cli.error(err);
		cli.info(track.name + " - " + track.artist);
	});
}


cli.main(function (args, options) {
	if (cli.command == 'play') {
		if (cli.args.length) {

			client.playTrack(cli.args.shift(), function () {
				nowPlaying();
			});

		} else {

			client.play(function () {
				nowPlaying();
			});

		}
	}

	if (cli.command == 'pause') {
		client.pause(function () {
			cli.ok('paused');
		});
	}

	if (cli.command == 'next') {
		client.next(function () {
			nowPlaying();
		});
	}

	if (cli.command == 'previous') {
		client.previous(function () {
			nowPlaying();
		});
	}

	if (cli.command == 'status') {
		client.getState(function (err, state) {
			if (err) return cli.error(err);
			cli.info(state.state);

			client.getTrack(function(err, track) {
				if (err) return cli.error(err);
				cli.info(track.name + " - " + track.artist);
				cli.progress(state.position / track.duration);
			});
		});
	}

});
