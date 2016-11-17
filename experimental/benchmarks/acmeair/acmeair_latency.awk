BEGIN {
    IGNORECASE=1;
    FS = ",";
    count = 0;
}


NR == 1 {
    for (i = 1; i <= NF; i++) {
        if ($i == "Latency") {
            cidx = i;
        }
    }
}


NR > 1 {
    if (cidx > 0) {
        count++;
        sum += $cidx;
        }
    }

END {
    print sum/count;
    }
