var Table = require('./domain/table.js');
var Row = require('./domain/row.js');
var Cell = require('./domain/cell.js');

var pivot = require('./processing/pivot.js').pivot;

var render = require('./view/renderer.js').render;

var row0 = new Row([new Cell("Web", "News"), new Cell("Mes", "Enero"), new Cell("Visitas", 4)]);
var row1 = new Row([new Cell("Web", "News"), new Cell("Mes", "Febrero"), new Cell("Visitas", 14)]);
var row2 = new Row([new Cell("Web", "News"), new Cell("Mes", "Marzo"), new Cell("Visitas", 8)]);
var row3 = new Row([new Cell("Web", "News"), new Cell("Mes", "Abril"), new Cell("Visitas", 321)]);
var row4 = new Row([new Cell("Web", "com"), new Cell("Mes", "Enero"), new Cell("Visitas", 2)]);
var row5 = new Row([new Cell("Web", "com"), new Cell("Mes", "Febrero"), new Cell("Visitas", 4)]);
var row6 = new Row([new Cell("Web", "com"), new Cell("Mes", "Marzo"), new Cell("Visitas", 19)]);
var row7 = new Row([new Cell("Web", "com"), new Cell("Mes", "Abril"), new Cell("Visitas", 21)]);

var table = new Table(["Mes", "Visitas"], [row0, row1, row2, row3, row4, row5, row6, row7]);

render(table);

console.log("Ahora pivotamos...");

var pivotedTable = pivot(table, "Mes", "Visitas");


render(pivotedTable);
