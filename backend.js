const firebase = require('firebase');
const uuidv1 = require('uuid/v1');


var config = {
    apiKey: "AIzaSyBCvgQDWbjTy6hQMJUa8UN8Y3wCUL5vPt4",
    authDomain: "htn2018-weather.firebaseapp.com",
    databaseURL: "https://htn2018-weather.firebaseio.com",
    projectId: "htn2018-weather",
    storageBucket: "htn2018-weather.appspot.com",
    messagingSenderId: "1050797363023"
};
firebase.initializeApp(config);
var database = firebase.database();
// Get the Storage service for the default app
var defaultStorage = firebase.storage();

