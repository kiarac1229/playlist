// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"El Farsante",
	"artist":"Ozuna",
	"mp3Url":"https://open.spotify.com/album/3SmlGJTItlYsSkcVbiQuVa",
	"imageUrl":"https://i.ytimg.com/vi/6DRkf3kZMXw/maxresdefault.jpg",
}

/*var ozunaSong= mySong.title
var ozunaArtist= mySong.artist
var ozunaUrl= mySong.mp3url
var ozunaImage= */

var myPlayList = [
	{
		"title":"Tu Futo",
		"artist":"Ozuna",
		"mp3Url":"https://open.spotify.com/track/0Szp49tpFasIjX04Mcsydp",
		"imageUrl":"https://i0.wp.com/www.gotdembow.net/wp-content/uploads/2017/04/Ozuna-Tu-Foto-www.GotDembow.net_-e1493358429307.png?fit=600%2C600",
	},
	{
		"title":"Tell Me You Love Me",
		"artist":"Demi Lovato",
		"mp3Url":"https://open.spotify.com/album/2LGlGo4wHdPF2ZV1h0eX1A",
		"imageUrl":"http://coverlandia.net/sites/default/files/styles/music_artwork_page/public/artworks/music/315101504647331.jpg?itok=A7_aIC7R",
	},
	{
		"title":"The Weekend",
		"artist":"SZA",
		"mp3Url":"https://open.spotify.com/track/6gU9OKjOE7ghfEd55oRO57",
		"imageUrl":"https://i.ytimg.com/vi/PALMMqZLAQk/maxresdefault.jpg",
	}

]



// DOCUMENT READY FUNCTION
/*global $*/
$( document ).ready(function() {
	$('body').append("<h3> Title: " + mySong.title + "</h3>");
	$('body').append("<h3> Artist: " + mySong.artist + "</h3>");
	$('body').append("<a href=" + mySong.mp3Url + ">Play Here</a>");
	$('body').append("<img src =" + mySong.imageUrl + ">");
  



});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
