var strava = require('strava-v3');

strava.athlete.listActivities({
	access_token: "4b812f0e2c83bc9a823cd034507e79dada09d93a",
	before: process.argv[2] || 1460173039,
	per_page: process.argv[3] || 10
},function(err, activities) {

	if (err) {
		console.log(err);
		return;
	}

	activities.forEach(function(activity) {
		if (activity.private) {
			console.log("Publicizing " + activity.name);
			strava.activities.update({
				access_token: "4b812f0e2c83bc9a823cd034507e79dada09d93a",
				id: activity.id,
				private: false,
			}, function (err, activity) {
				
				if (err) {
					console.log(err);
				} else {
					console.log("SUCCESS: " + activity.name + " is now public");
				}

			});
		}
	});

});