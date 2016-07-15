"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
    firebase = require("./firebaseConfig"),
    fb = require("./fb-getter"),
    fbData = fb();

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getSongs() {
	return new Promise(function ( resolve, reject){
		$.ajax({
			url: "https://music-history-fd01f.firebaseio.com/.json"  ////////////make sure this is a .json file
		}).done(function(songData){
			resolve(songData);
		});
	})
}

function addSong(songFormObj) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: "https://music-history-fd01f.firebaseio.com/songs.json",
			type: "POST",
			data: JSON.stringify(songFormObj),
			dataType: "json" 
	}).done(function(songId){
		resolve(songId);
	});
});
}	

function deleteSong(songId) {

}

function getSong(songId) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://music-history-fd01f.firebaseio.com/songs/${songId}.json`
			}).done(function(songData){
				resolve(songData);
			});
		})
}

function editSong(songFormObj, songId) {

}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};

// ****************************************
// DB interaction using Firebase SDK
// ****************************************

// function getSongs(callback) {

// }

// function addSong(newSong) {

// }

// function deleteSong(songId) {

// }

// function getSong(songId) {

// }

// function editSong(songFormObj, songId) {

// }

// module.exports = {
//   getSongs,
//   addSong,
//   getSong,
//   deleteSong,
//   editSong
// };