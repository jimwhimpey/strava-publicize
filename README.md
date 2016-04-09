# Strava Publicize

First you've got to do the config thing for the great [strava-v3 npm module](https://www.npmjs.com/package/strava-v3).

Then you've got to do the [auth stuff yourself](http://strava.github.io/api/v3/oauth/).

Then to run it you pass in a UNIX timestamp. From the Strava docs: "seconds since UNIX epoch, result will start with activities whose start_date is before this value"

And the number of activities into the past you'd like to go.

### Disclaimer

I spent an hour on this to scratch an itch. Use it at your own risk.