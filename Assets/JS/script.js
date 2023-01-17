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

 //https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20+plano,Tx&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4
// queryURL todo: fix the fueltype field
   function currentGasList(gasLocation) {
    const queryURL="https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices+" +gasLocation+"&api_key="+ api_key;
    console.log(queryURL);

//  Function to call the yahoo API
  fetch(queryURL) 
    .then(response => response.json())
    .then(data => {
      const prices = data.items.map(item => item.pagemap.offer[0].price);
      const cheapestPrice = Math.min(...prices);
      console.log(`The cheapest gas price in ${location} is ${cheapestPrice}`);
    })
  //  .catch(error => console.error(`Error getting gas prices: ${error}`));
}

//   Zip Code Results 
  //async function getData() {
    //var searchCity = document.getElementById("search-input").value;
    //const url = 'https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20+plano,Tx&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4';
    //const response = await fetch(url);
    //const data = await response.json();
    //console.log(data);
//} 

// Function to make googlemaps api call for gas station selected   
  function initMap() {
    //map options
  var options = {
  center: {lat:33.0198, lng:-96.6989},
  zoom:8    
   }
    //new map
   map = new google.maps.Map(document.getElementById('map'),options) 

  }


// //  Click button to call the function above   
$('#find-btn').click(function(event) {  
    event.preventDefault();
    currentGasList(event);
    console.log(searchCity);
 });  

//  Click button to clear the initial search
$('#clear-btn').click(function(event) { 
   event.preventDefault();
   console.log("Clearing...");
 });

//  Click Handlers PLACEHOLDER
// $("#find-btn").on("click", getGasList)
// $("#clear-btn").on("click", clearSearch)

//Module Code

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
