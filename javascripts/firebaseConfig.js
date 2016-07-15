"use strict";

let firebase = require("firebase/app"),
    fb = require("./fb-getter"),
    fbData = fb();   /////////ths is running the function from the line above 

require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: fbData.key,
  databaseURL: fbData.url,
  authUrl: fbData.authUrl,
  storageBucket: fbData.bucketUrl
};

firebase.initializeApp(config);

module.exports = firebase;