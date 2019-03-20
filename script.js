function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log(lat);
  console.log(long);
 showWeather(lat,long);
}

function showWeather(lat,long){
	// let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=6eccd05f671507ab8460c5a4fb5cb04f'; 
	let apiKey = "&appid=6eccd05f671507ab8460c5a4fb5cb04f";
	let apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat="
	let latitude = lat;
	let longi = "&lon=";
	let longitude = long;
	let mode = "&mode=html";
	let units = "&units=metric"
	let apiCall = apiUrl + lat + longi + longitude+ units + apiKey ;
		console.log(apiCall); 





	$.getJSON(apiCall,weatherCallback);
	console.log(lat);
}

function weatherCallback(weatherData){

	let temp =weatherData.main.temp;
	let city = weatherData.name;
	let country = weatherData.sys.country;
	console.log(city);
	document.getElementById("city").innerHTML = "Current Weather in " + city + " " + country;
	document.getElementById("temp").innerHTML = temp + "&#8451";

	console.log(weatherData);
}
