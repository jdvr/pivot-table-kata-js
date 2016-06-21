# Pivotando tablas.

Table, Row, Cell. En principio no usaremos Rows porque es sólo un array.
Tampoco usaremos builders porque estáis obsesionados con ellos y en JS en el 99.9% de los casos no hacen falta.

### Cell

```javascript
var cell = new Cell("Mes", "Enero");

console.log(cell.name, cell.value); // "Mes" "Enero" - sólo lectura
```

### Row

```javascript
var row = new Row([new Cell("Mes", "Enero"), new Cell("Visitas", 4)]);

console.log(row.cells); // [new Cell("Mes", "Enero"), new Cell("Visitas", 4)] - copia, sólo lectura
console.log(row.size()); // 2
console.log(row.nameAt(1)); // "Visitas"
console.log(row.valueAt(1)); // 4
console.log(row.valueAtName("Visitas")); // 4
console.log(row.cellNamed("Visitas")); // new Cell("Visitas", 4)
console.log(row.values()); // ["Enero", 4]
console.log(row.valuesMap()); // { "Mes": "Enero", "Visitas": 4 }
console.log(row.contains("Visitas")); // true
```

### Table

```javascript
var table = new Table(["Mes", "Visitas"], [row, row, row]);

console.log(table.header); // ["Mes", "Visitas"] - copia, sólo lectura
console.log(table.rows); // [row, row, row] - copia, sólo lectura
console.log(table.numRows()); // 3
console.log(table.numCols())); // 2
console.log(table.row(1)); // row
console.log(table.hasContent()); // true
```