// Variable declarations 
let gasLocation="";
let fuelType=""
let searchCity=$("#search-input");
let fuelTypeDropDown=$("#fuel-type");
let findBtn ="#find-btn";
let clearBtn ="#clear-btn";
let api_key="d4c55c5b1bf40ea6c2ebcaa60f85788f284f9f0432216ca9f70fec6b75ebdcc4";

const queryURL="https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices+"

//const queryURL="https://serpapi.com/search.json?engine=yahoo&p=cheapest+gas+prices+"+gasLocation+"&tbm=lcl&api_key="+ api_key;

let results=document.getElementById('results');

// Function that grabs data from input field 

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
         let lettersArray = ["A", "B", "C", "D", "E", "F"];
         for (let i=0; i<5; i++) {
         return `<li>  <h3>${lettersArray[key]}.</h3>  <p>${item.address}</p>  <p>${item.phone     }</p>  </li>`;
         }
       });
       document.getElementById("gasStations").innerHTML = listItems.join("");
       map.appendChild(mapImage)
     }
    
    function clearFields() {
      searchCity.value = ""
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
   clearFields(event);
   console.log("Clearing...");
 });

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

}
