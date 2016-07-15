"use strict";

///////////this will get firebase data////////////
/////////////this needs to be added to .gitignore/////////

function getKey() {
  return {
    key: "AIzaSyDMM7y6v8ngwj9ph0TUMmQOsyvhooDEb1k",
    url: "https://music-history-fd01f.firebaseio.com",
    authUrl: "music-history-fd01f.firebaseapp.com",
    bucketUrl: "music-history-fd01f.appspot.com"
  };
}

module.exports = getKey;