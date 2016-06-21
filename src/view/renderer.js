require('console.table');

function inspect(table) {
    console.log("Table contents - (cols, rows): (" + table.numCols() + "," + table.numRows() + ")");
    
    console.log("Headers:")
    console.dir(table.header,{colors:true});
    console.log("Rows:")
    table.rows.forEach(function(r, i) {
        console.log("Row [" + i + "]:");
        r.cells.forEach(function(c) {
            console.log("Name: " + c.name + ", Value: " + c.value);
        });
    });
}
function render(table) {
    var outputTable = table.rows.map(function(r) {
        return r.valuesMap();
    });
    console.table("Table:", outputTable);
}
function toHtml(table) {
    // TODO: Implement this
    return table;
}

module.exports = { render: render, inspect: inspect, toHtml: toHtml };