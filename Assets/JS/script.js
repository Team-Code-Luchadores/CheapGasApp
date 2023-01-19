// Variable declarations 
let gasLocation="";
let fuelType=""
let searchCity=$("#search-input");
let fuelTypeDropDown=$("#fuel-type");
let findBtn ="#find-btn";
let clearBtn ="#clear-btn";
let api_key="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";
const queryURL="https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices+"
let latLocation ="";
let lonLocation ="";

// Function that grabs data from input field 
  function getGasList(event) { 
   event.preventDefault();

   if(searchCity!=="") {
     gasLocation=searchCity;
   }

   if(gasLocation) {
     currentGasList(gasLocation)
   } else {
     // todo: tell user to fill out the input field or search box
   }

  } 

 //https://serpapi.com/search.json?engine=yahoo&p=cheapest%20gas%20prices%20%20+plano,Tx&api_key=d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4

    async function currentGasList(gasLocation) {
      console.log(gasLocation);

      searchCity = document.getElementById("search-input").value;
      const url = queryURL+searchCity+"&tbm=lcl&api_key="+ api_key;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
       genList(data);
    }

     function genList(data) {
      console.log(data);
      let map = document.getElementById('map')
      let mapImage = document.createElement("img")
      mapImage.src = data.local_map.image
       let list = document.dataTransfer  
       let listItems = data.local_results.places.map(function(item, key) {
        console.log(data);
         return `<h1>Gas Stations Results</h1>   <li>  <h3>${item.title}</h3>  <p>${item.price}</p>  <p>${item.address     }</p>  </li>`;
       });
       document.getElementById("gasStations").innerHTML = listItems.join("");
       map.appendChild(mapImage)
     }
    

    function clearFields() {
      searchCity.value = ""
    }
                            

// Function to make googlemaps api call for gas station selected   
   function initMap() {
     //map options
    var options = {
          center: {lat:32.67, lng:-96.79} ,
          zoom:8,    
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
