# clone repo
git clone https://github.com/nmcardoso/engsoft.git /tmp/deploy

# move files
rm -rf server
cp -r /tmp/deploy/server .

# restart editor
refresh