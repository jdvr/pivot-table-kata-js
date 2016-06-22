var Table = require('./domain/table.js');
var Row = require('./domain/row.js');
var Cell = require('./domain/cell.js');

var pivot = require('./processing/pivot.js').pivot;

var render = require('./view/renderer.js').render;

var Enero = function(val) { return new Cell("ENERO", val); };
var Febrero = function(val) { return new Cell("FEBRERO", val); };
var Marzo = function(val) { return new Cell("MARZO", val); };
var Abril = function(val) { return new Cell("ABRIL", val); };
var Fecha = function(val) { return new Cell("FECHA", val); };
var Valor = function(val) { return new Cell("VALOR", val); };
var Gestor = function(val) { return new Cell("GESTOR", val); };
var Linea = function(val) { return new Cell("LINEA", val); };

var header = ["GESTOR", "LINEA", "FECHA", "VALOR"];

var rows = [
    new Row([Gestor("Sam"), Linea("Segunda Mano"), Fecha("ENERO"), Valor(20)]),
    new Row([Gestor("Sam"), Linea("Segunda Mano"), Fecha("FEBRERO"), Valor(21)]),
    new Row([Gestor("Sam"), Linea("Segunda Mano"), Fecha("MARZO"), Valor(22)]),
    new Row([Gestor("Sam"), Linea("Segunda Mano"), Fecha("ABRIL"), Valor(25)]),
    new Row([Gestor("Max"), Linea("Segunda Mano"), Fecha("ENERO"), Valor(30)]),
    new Row([Gestor("Max"), Linea("Segunda Mano"), Fecha("FEBRERO"), Valor(31)]),
    new Row([Gestor("Max"), Linea("Segunda Mano"), Fecha("MARZO"), Valor(32)]),
    new Row([Gestor("Max"), Linea("Segunda Mano"), Fecha("ABRIL"), Valor(35)])
];

var table = new Table(header, rows);

render(table);

console.log("Pivotamos...\n");

var pivotedTable = pivot(table, "FECHA", "VALOR");

render(pivotedTable);
