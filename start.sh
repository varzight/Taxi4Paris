#! /bin/bash
npm install
mkdir lib/ &2> /dev/null
wget "http://code.jquery.com/jquery-2.2.1.min.js" -O "lib/jquery.js"
wget "https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip" -O "lib/bootstrap.zip"
wget "http://opendata.paris.fr/explore/dataset/paris_taxis_data/download/?format=json&timezone=Europe/Berlin" -O "node/taxis.json"
cd lib/
unzip -a *.zip
rm -f *.zip
mv "bootstrap-3.3.6-dist" "bootstrap"
cd ..
echo "Installation terminee"
