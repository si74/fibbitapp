#Install mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

service mongod status

#Install npm, node, package manager
sudo apt-get update

sudo apt-get install nodejs

sudo apt-get install npm

#install pm2 process manager
npm install pm2 -g
