const admin = require('firebase-admin');

const serviceAccount = require('serene-f5620-firebase-adminsdk-fbsvc-72b9ce021b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'serene-f5620' // Replace with your project ID
});

const db = admin.firestore(); // Get a reference to the Firestore database
module.exports = db;