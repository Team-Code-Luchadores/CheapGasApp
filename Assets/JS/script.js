let gasLocation="";
let searchCity="#search-city"
let findBtn ="#find-btn";
let clearBtn ="#clear-btn";
let api_key="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";
const queryURL = "http://serpapi.com/search.json?engine=yahoo&p="; +gasLocation + "&api_key=" + api_key;



// async function gasPrices() {
//   // Here we build the URL so we can get a data from server side.
//   const queryURL= "https://serpapi.com/search.json?engine=yahoo&p=%20gas%20prices%20+%20plano%20texas&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4&maxResults=5;";
//   $.ajax({
//     url: queryURL,
//     type: "GET",  
//   })


  
//  Click button to call the function above   
 $('#find-btn').click(function(event) { 
   event.preventDefault();
   console.log("Searching...");
 });  

//  Click button to clear the initial search
 $('#clear-btn').click(function(event) { 
   event.preventDefault();
   console.log("Clearing...");
 });