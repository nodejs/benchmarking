#!/bin/bash
export ROOT=/home/benchmark
export BACKUPDIR=$ROOT/backups
credentials=`cat $ROOT/creds`
mkdir -p $BACKUPDIR 
rm $BACKUPDIR/backup-previous || true 
mv $BACKUPDIR/backup-current $BACKUPDIR/backup-previous || true
mysqldump $credentials benchdb > $BACKUPDIR/backup-current
