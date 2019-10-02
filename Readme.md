#

## installation
expo init qcm-appli
choisir ne pas installer yarn
et selectionner l'installation avec tabs

## lancement
npm start

## installation du paquet native bse
npm install native-base --save

## Variables d'environnement
npm install --save-dev babel-preset-expo babel-plugin-inline-dotenv

créer ensuite le fichier .babelrc
et y mettre :
{ "presets": ["babel-preset-expo"], "plugins": ["inline-dotenv"] }

créer ensuite le fichier .env avec cette valeur:
API_URL=http://localhost:8000


