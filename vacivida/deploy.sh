# clone repo
git clone https://github.com/nmcardoso/engsoft.git /tmp/deploy

# move files
cp -r /tmp/deploy/vacivida/* .
rm -rf /tmp/deploy

# restart editor
refresh
