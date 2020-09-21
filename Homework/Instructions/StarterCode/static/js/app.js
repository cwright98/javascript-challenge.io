// from data.js
var tableData = data;

// YOUR CODE HERE!

var $tbody=d3.select("tbody");
var inputDate=d3.select("#datetime");
var button=d3.select("#filter-btn");
var columns=["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




var populateTable=(dataInput) => {
    dataInput.forEach(ufoSighting => {var row=$tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSighting[column])
        )
    });
}

populateTable(tableData)

button.on("click", ()=> {
    d3.event.preventDefault();
    var inputtedDate=inputDate.property("value").trim();
    var inputtedCity=inputCity.property("value").trim();
    var filterDate=tableData.filter(tableData=>tableData.datetime==inputtedDate);
    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputtedDate);
    $tbody.html("");
    let response = {
        filterDate, filterCombinedData
    }
    
    if(response.filterDate.length !== 0) {
        addData(filterCombinedData);
    }



    
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }

        

        else {
            $tbody.append("tr").append("td").text("Sorry, we couldn't find any sightings on this date. Please enter another!");
        }
}
)