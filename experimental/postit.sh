CUR_TIME=`date +%s`
wget -O result --user=xxxxxxxxx --password=xxxxxxxxx --no-check-certificate  "https://10.52.6.151:3000?benchid=1&time=$CUR_TIME&value=$1"
cat result
