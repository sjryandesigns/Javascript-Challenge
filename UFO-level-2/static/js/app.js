// from data.js
var tableData = data;

// Get a referece to the table body
var tbody = d3.select("tbody")


// Console.log the weather data from data.js
console.log(tableData)

// Loop Through `tableData` and console.log each ufo sighting object
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

    // Append on table row 'tr' for each ufo sighting object
    var row= tbody.append("tr");

    // Use `Object.entries` to console.log each ufo sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value in ufo sighting object
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#input");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // Log input value
    console.log(inputValue);
    
    // Filter data to datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    // Log filter data 
    console.log(filteredData);

    // Display filtered dataset in table body
    filteredData.forEach(function(sightings) {
        console.log(sightings);
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
