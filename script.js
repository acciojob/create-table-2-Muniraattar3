function createTable() {
  // Get the table element from the DOM.
  const table = document.getElementById("myTable");

  // Prompt the user for the number of rows and columns.
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert the prompt responses to numbers.
  rn = Number(rn);
  cn = Number(cn);

  // Validate the inputs: they must be numeric and greater than 0.
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Clear any existing content in the table.
  table.innerHTML = "";

  // Loop through and create rows and cells.
  for (let i = 0; i < rn; i++) {
    // Insert a new row at the end of the table.
    const row = table.insertRow(i);
    for (let j = 0; j < cn; j++) {
      // Insert a new cell in the current row.
      const cell = row.insertCell(j);
      // Set the cell text to "Row-i Column-j".
      cell.textContent = "Row-" + i + " Column-" + j;
    }
  }
}
