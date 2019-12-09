// from data.js
var tableData = data;

// YOUR CODE HERE!
//select the filter type
// var fiterTypeValue = d3.select("#filter-type");
// var filterTypeValue = d3.select("#filter-type-value");

//select the submit button
//var submit = d3.select("#filter-btn");

// get a reference to the table body
var tbody = d3.select("tbody");


// console.log the aliens data from data.js
//console.log(tableData);
// Shows all the data in the file to the webpage
autopopulate(tableData);
//autoPopulate(tableData);



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



//funtion to link slection of an item from dropdown
/* filterType=d3.select("#filter-btn")
filterType.on("change", function() {
    var filterValue = filterType.property("value");
    d3.select("#datetime").node().value ='';
    // stetting placeholder values for inout text
    switch (filterValue) {
        case 'date/time':
            placeHolder = '1/1/2011';
        break
        case 'city': 
            placeHolder = 'city';
        break
        case 'state':
            placeHolder = 'state';
        break
        case 'country':
            placeHolder = 'country';
        break
        case 'shape':
            placeHolder = 'shape';
        break
        default: 
            placeHolder = '';

    }
d3.select("input").attr('placeHolder', placeHolder);
d3.select('label')
    .attr("for", filterValue)
    .text('Enter a value for ${filterValue.toUpperCase()}');
});
d3.selectAll('form').on('submit', () => d3.event.preventDefault())

// function to link on clicking button
submit.on('click', function(){

    //prevent the page from refreshing
    d3.event.preventDefault();

    // clear previous data
    tbody.html("");

    //get the data entered in the text box
    var inputElement = d3.select("#datetime");
    console.log(inputElement)
    var inputValue = inputElement.property("value");
    console.log(inputValue)

    if (inputValue == '') {
        alert("Please enter value");
        document.getElementById ("#datetime").focus();
        autoPopulate(tableData);
    }

    // filter the data on the input value
    var typeVal = d3.select("label").attr("for");

    var filterData = tableData.filter(aliens => aliens[typeVal] === inputValue);
    if (filterData.length == 0) {
        alert("Opps..No UFO's Found");
        d3.select("#datetime").node().value = '';
        autoPopulate(tableData);
    }
    console.log(filterData);

    //display the data for the selection
    //filterData.forEach((alients) => {
        //var row = tbody.append("tr");
        Object.entries(filterData).forEach(([key, values]) => {
            var row = tbody.append("tr");
            var cell = row.append("td");
            cell.text(values);
            console.log(values)
        });
    }); */
