# Taxi4Paris
Système de réservation de taxis avec affichage en temps réel

# Installation
Récupèrer tous les fichiers depuis GIT
Disposer d'un serveur NodeJS installé
chmod +x start.sh
./start.sh
Ce script télécharge sur internet tous les fichiers nécessaires (opendata de la ville de paris sur les taxis, plugins nodejs, jquery, bootstrap)
Les plugins NodeJS utilisés sont les suivants : jQuery et Socket.IO.
Ils sont chargés automatiquement (utilisation de npm install)

# Fonctionnement
Lancer un serveur web dans le dossier principal du projet (celui qui contient index.html)
(on peut trouver un serveur web minimaliste en faisant npm install http-server -g
  puis en se rendant directement dans le dossier et taper hs ou http-server)
Ensuite, lancer le serveur node dans node/socketserver.js (il faut faire node socketserver.js)

# Utilisation
Se rendre sur localhost:8000 (ou autre port, dépend de ce que http-server donne)
Normalement les voitures s'affichent
On peut cliquer sur une voiture pour la commander
Elle se déplace
Et elle arrive

# Comment ça marche ?
On récupère une liste des taxis sur l'opendata de la ville de Paris, néanmoins ce n'est que rarement mis à jour
DU coup cela constitue une base pour la localisation des taxis, mais on ne la recharge pas à chaque fois
Le serveur node socket.io envoie des  notifications au client pour prévenir que la liste des taxis a changé
Ensuite, le client récupère de façon asynchrone ces informations (il écoute le serveur) et les ajoute sur la map google maps API
Enfin, on peut cliquer sur le taxi, et le taxi arrive (déplacement élémentaire juste une modification de latitude/longitude)

# Raffinements possibles
Utiliser le direction API de google maps pour bien que le taxi reste dans la rue (et ne donne pas l'impression de voler)
Utilisation de la localisation du client
Trouver une autre source de données taxi que l'on puisse utiliser en temps réel (l'"architecture" fonctionne déjà pour ça)
