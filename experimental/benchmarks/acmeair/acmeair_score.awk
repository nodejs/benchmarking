## ACME_SCORE.AWK
## Calculates the score for an Acme Air run
## This is based on counting the number of successful responses received AFTER the first 120 seconds of the run
## (to allow for warmup time) and then dividing by the elapsed time (minus 120 seconds) to get a requests/sec score
## 
## This script can be executed at any time, but ideally it should be done immediately after the run completes, and the
## result should be stored in the results file (appended at the end) so it can be accessed by the getstats script.
## This will avoid having to re-calculate the score every time we want to see the stats, which takes a very long time
## because the Acme Air results files are huge
## 
## USAGE: echo SCORE: $(cat $resultsfile | awk -f $mydir/acme_score.awk) >> $resultsfile

BEGIN {
	FS = ",";           # the results file is comma-separated
	start_time = 0;     # time at which the first successful response was received
	end_time = 0;       # time at which the last successful response was received
	count = 0;          # total successful responses
}

$8 == "true" {          # this signifies a successful response

	if (end_time) {     # end_time>0 means we are past the first 120 seconds
		end_time = $1 / 1000;   # divide by 1000 because timestamps in the file are in ms
		count++;
	}
    
	else if (start_time) {      # start_time>0 means we have found a successful response
		end_time = $1 / 1000;
		if (end_time > (start_time + 120)) {
			start_time = end_time;  # once we are past 120 seconds, fix the start_time
			count++;
		}
		else {
			end_time = 0;           # if still within 120 seconds, reset end_time
		}
	}
	else {
		start_time = $1 / 1000;     # first successful response
	}
}

END {
	print count / (end_time - start_time);
}
