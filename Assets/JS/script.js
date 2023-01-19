// Variable declarations 
let gasLocation="";
let fuelType=""
let searchCity=$("#search-input");
let fuelTypeDropDown=$("#fuel-type");
let findBtn ="#find-btn";
let clearBtn ="#clear-btn";
let api_key="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";

const queryURL="https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices+"+gasLocation+"&tbm=lcl&api_key="+ api_key;
let latLocation ="";
let lonLocation ="";

let results=document.getElementById('results');

// Function that grabs data from input field 

  function getGasList(event) { 
   event.preventDefault();

   if(searchCity.val().trim()!=="") {
     gasLocation=searchCity.val().trim();
   }

   // console.log(fuelTypeDropDown.val());

   // if(fuelTypeDropDown.val()!=="") {
   //   fuelType = fuelTypeDropDown.val();
    //}

   if(gasLocation) {
     currentGasList(gasLocation)
   } else {
     // todo: tell user to fill out the input field or search box
   }

  } 

 //https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20+plano,Tx&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4

    async function currentGasList() {
      searchCity = document.getElementById("search-input").value;
      const url = queryURL;
      const response = await fetch(url);
      const data = await response.json();
       genList(data);
    }

     function genList(data) {
      let list = document.dataTransfer  
      let listItems = data.local_results.places.map(function(item) {
        return `<h1>Gas Stations Results</h1>   <li>  <h3>${item.title}</h3>  <p>${item.price}</p>  <p>${item.address     }</p>  </li>`;
      });
      document.getElementById("gasStations").innerHTML = listItems.join("");
    }

    function clearFields() {
      searchCity.value = ""
    }
                            
    

// Function to make googlemaps api call for gas station selected   
  // function initMap() {
  //   //map options
  //  var options = {
  //        center: {lat:32.67, lng:-96.79} ,
  //        zoom:8,    
  //    }
  //     //new map
  //    map = new google.maps.Map(document.getElementById('map'),options) 

  //   }

// create elements for gas station to gen list
//  function genList(list) {
//      for (var i = 0; i < list.length; i++) {
//      var listItem = document.createElement('li');
//      listItem.innerText = list[i].title;
//      listItem.dataset.lat=list[i].gps_coordinates.latitude;
//      listItem.dataset.lon=list[i].gps_coordinates.longitude;
//      listItem.addEventListener('click', function(event){
//        var lat = event.dataset.lat;
//        var lon = event.dataset.lon;
//        setMap (lat,lon)

//      })
//        document.getElementById('gasStations').appendChild(listItem)
//  }
//  }

// set map function
//  function setMap(lat,lon) {
//  //map options/ 
//  var options = {
//    center: {lat: lat, lon: lon} ,
//    zoom:8,    
//    mapTypeID: 'roadmap',
//  }
//  //new map
//  map = new google.maps.Map(document.getElementById('map'),options) 
//  }

 //https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices+plano,Tx&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4
// queryURL todo: fix the fueltype field
   function currentGasList(gasLocation) {
    const queryURL= 'https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20&location= +getLocation+ &tbm=lcl &api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4'
    //const queryURL= 'https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20''&location =' +gasLocation '&api_key=' +d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4'
   // const queryURL='https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices'&location= +gasLocation+'&api_key='+ api_key;
   // const queryURL='https://serpapi.com/search.json?q=gas'
    console.log(queryURL);

//  Function to call the yahoo API
  fetch(queryURL) 
    .then(response => response.json())
    .then(data => {
     // var related_searches = data.related_searches[0].query
    // displayGasData(related_searches);
     // const prices = data.items.map(item => item.pagemap.offer[0].price);
     // const cheapestPrice = Math.min(...prices);
      console.log(data);
    })
  //  .catch(error => console.log(`Error getting gas prices: ${error}`));
}
// Display Gas Station Results
//function displayGasData (data) {
 // let ptag=document.createElement('p');
 // ptag.textContent=(data);
 // results.appendchild(ptag);
//}

//   Zip Code Results 
  async function getData() {
    var searchCity = document.getElementById("search-input").value;
    const url = 'https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20'+gasLocation+'&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} 

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

  