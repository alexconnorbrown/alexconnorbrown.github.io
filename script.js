function showCityInfo() {
    var city = document.getElementById('cityDropdown').value;
    var cityNameHeader = document.getElementById('cityName');
    var cityInfoDiv = document.getElementById('cityInfo');
    
    cityNameHeader.innerText = city; // Update the city name heading
    cityInfoDiv.innerHTML = "<p>Information about " + city + " will be displayed here.</p>";
}
