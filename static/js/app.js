// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }


  function handleClick() {
    // Grab the datetime value from the filter
    let datetime = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value")
    let state = d3.select("#state").property("value")
    let country = d3.select("#country").property("value")
    let shape = d3.select("#shape").property("value")
    

    filters = [datetime, city, state, country, shape]
   
   
    // Check to see if a date was entered and filter the
    // data using that data
    console.log('!!!!!!!!!!!!!!!!!!!!!!!')
    
    function filterTable(data) {

      return data.map((row) => {
        let result = row
        if(datetime) {
          result = row.datetime === datetime ? row : {}
        }

        if(city) {
          result = row.city === city ? row : {}
        }

        if(state) {
          result = row.state === state ? row : {}
        }

        if(country) {
          result = row.country === country ? row : {}
        }

        if(shape) {
          result = row.shape === shape ? row : {}
        }

        console.log(result)

        return result
      })
      // if (date) {
      //   // Apply `filter` to the table data to only keep the
      //   // rows where the `datetime` value matches the filter value
      //   filteredData = filteredData.filter(row => row.datetime === date);
      // };
      // console.log(filteredData)

      // if (city) {
      //   filteredData = filteredData.filter(row => row.city === city);
      // }

      // if (state) {
      //   filteredData = filteredData.filter(row => row.state === state);
      // }

      // if (country) {
      //   filteredData = filteredData.filter(row => row.country === country);
      // }

      // if (shape) {
      //   filteredData = filteredData.filter(row => row.shape === shape);
      // }
      // Rebuild the table using the filtered data
      // @NOTE: If no date was entered, then filteredData will
      // just be the original tableData.
      buildTable(filterTable(tableDate));
    }
    buildTable(filterTable(tableData));
  }
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  // Build the table when the page loads
  buildTable(tableData);