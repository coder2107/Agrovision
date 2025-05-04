// Existing State and City Arrays
var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh");

var s_a = new Array();
s_a[0] = "";
s_a[1] = "Alipur | Andaman Island | Anderson Island | ..."; // Andaman & Nicobar Cities
s_a[2] = "Achampet | Adilabad | Adoni | ..."; // Andhra Pradesh Cities
// ... Initialize other states' cities

// Rainfall Data Mapping
var rainfall_data = {
    "Alipur": "123 mm",
    "Andaman Island": "150 mm",
    "Anderson Island": "200 mm",
    "Hyderabad": "800 mm",
    "Mumbai": "2400 mm",
    "Delhi": "600 mm",
    // ... Add all other cities with their rainfall data
};

// Function to Populate States
function print_state(state_id){
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select State','');
    option_str.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
        option_str.options[option_str.length] = new Option(state_arr[i], state_arr[i]);
    }
}

// Function to Populate Cities based on Selected State
function print_city(city_id, state_index){
    var option_str = document.getElementById(city_id);
    option_str.length = 0;	// Clear existing options
    option_str.options[0] = new Option('Select City','');
    option_str.selectedIndex = 0;
    var city_arr = s_a[state_index].split("|");
    for (var i = 0; i < city_arr.length; i++) {
        var city = city_arr[i].trim();
        option_str.options[option_str.length] = new Option(city, city);
    }

    // After populating cities, attach the event listener for rainfall
    attachRainfallListener(city_id);
}

// Function to Attach Event Listener to City Selector
function attachRainfallListener(city_id){
    var citySelect = document.getElementById(city_id);
    citySelect.removeEventListener('change', displayRainfall); // Remove existing listener to prevent duplicates
    citySelect.addEventListener('change', displayRainfall);
}

// Function to Display Rainfall Data
function displayRainfall(){
    var selectedCity = this.value;
    var rainfall = rainfall_data[selectedCity] || "Data not available";
    document.getElementById('rainfall').innerText = "Rainfall: " + rainfall;
}

// Initialize the State Selector on Page Load
window.onload = function(){
    print_state('state');
};
