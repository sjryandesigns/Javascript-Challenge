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



