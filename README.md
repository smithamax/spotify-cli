spotify-cli
===========

This package uses currently uses applescript so it will only work on osx.

Maybe once node-libspotify matures we'll use that.

Install
-------

```
$ npm install -g spotify-cli
```

Usage
-----

Commands avalible are `play`, `pause`, `next`, `previous`, `status`.

All pretty self explanitory. The only one with args at the moment is play.

Use it as a resume.

```
$ spotify play
INFO: Together - Logistics
```

Or to play a spotify uri.

```
$ spotify play spotify:track:1E2tRwT1GIHk1a8oYQMfjC
INFO: Teenage Crime - Radio Edit - Adrian Lux
```
