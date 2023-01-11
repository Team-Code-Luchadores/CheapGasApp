// Variable declarations 
let gasLocation="";
let searchCity=$("#search-input");
let findBtn ="#find-btn";
let clearBtn ="#clear-btn";
let api_key="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";
const queryURL = "http://serpapi.com/search.json?engine=yahoo&p="; + gasLocation + "&api_key=" + api_key;


function getGasList(event) {
  event.preventDefault();
  if(searchCity.val().trim!=="") {
    gasLocation=searchCity.val().trim();
    currentGasList(gasLocation);
    console.log("Searching gas prices and locations..");

  }
}
// Function API call and get search City, St or zip Code results and save to local.Storage
function currentGasList(gasLocation) {
  const queryURL="http://serpapi.com/search.json?engine=yahoo&p=" + gasLocation + api_key;
  $.ajax({
    url: queryURL,
    method: "GET",
  })
}

// Function to parse the results from the search

// Function API call to get map locations from previous location requests

// //  Click button to call the function above   
 $('#find-btn').click(function(event) {  
    event.preventDefault();
    console.log("Searching...", searchCity);
 });  

//  Click button to clear the initial search
 $('#clear-btn').click(function(event) { 
   event.preventDefault();
   console.log("Clearing...");
 });

//  Click Handlers PLACEHOLDER
// $("#find-btn").on("click", getGasList);
// $("#clear-btn").on("click", clearSearch);
