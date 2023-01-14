// Variable declarations 
let gasLocation="";
let fuelType=""
let searchCity=$("#search-input");
let fuelTypeDropDown=$("#fuel-type");
let findBtn ="#find-btn";
let clearBtn ="#clear-btn";
let api_key="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";


// Function that grabs data from input field 

 function getGasList(event) { 
  event.preventDefault();

  if(searchCity.val().trim()!=="") {
    gasLocation=searchCity.val().trim();
  }
  console.log(fuelTypeDropDown.val());

  if(fuelTypeDropDown.val()!=="") {
    fuelType = fuelTypeDropDown.val();
  }

  if(gasLocation && fuelType) {
    currentGasList(gasLocation)
  } else {
    // todo: tell user to fill out the input field or search box
  }

 }

// https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20+plano,Tx&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4
// queryURL todo: fix the fueltype field
function currentGasList(gasLocation, fuelType) {
  const queryURL="https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices+" +gasLocation+"&api_key="+ api_key;
  console.log(queryURL);
    // fetch(queryURL) .then((data)=> {
    //   return data.json();
    // }).then((completedata)=> {
    //   console.log(completedata)
    //   // document.getElementById().
    //   // innerHTML=completedata;
    // });
}
//  Function to parse the results from the search

// Function API call to get map locations from previous location requests
// const loader = new Loader({
//   apiKey: "AIzaSyA0wYvn_X98OtdnjFkVOJfHO857jDfeR9E",
//   version: "weekly",
//   ...additionalOptions,
// });

// loader.load().then(() => {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });


// //  Click button to call the function above   
 $('#find-btn').click(function(event) {  
    event.preventDefault();
    console.log("Searching...", searchCity);
    getGasList(event);
    currentGasList(event);
 });  

//  Click button to clear the initial search
 $('#clear-btn').click(function(event) { 
   event.preventDefault();
   console.log("Clearing...");
 });

//  Click Handlers PLACEHOLDER
// $("#find-btn").on("click", getGasList);
// $("#clear-btn").on("click", clearSearch);
