// from data.js
var tableData = data;



// get a reference to the table body
var tbody = d3.select("tbody");



// Shows all the data in the file to the webpage
autopopulate(tableData);




function autopopulate(tableData) {
    // This clears the page of previous information.
    tbody.html("");
   
    //d3 will help to populate tableData 
    tableData.forEach((alients) => {
    var row = tbody.append("tr");
    //console.log(alients);
    
    Object.values(alients).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
    });

    //object.entries(key,value).forEach(([alients]) => {
    //     var cell = row.append("td");
    //     cell.text(value);
    // });

});
}


d3.select("#filter-btn").on("click", getNewData);

function getNewData() {

var date = d3.select("#datetime").property("value");

let newData = tableData;

if (date) {
    newData = newData.filter(row => row.datetime === date);
}
console.log(newData);
autopopulate(newData);
}

