var Table = require('../domain/table.js');
var Row = require('../domain/row.js');
var Cell = require('../domain/cell.js');
var _ = require('lodash');

function uniqValues(headerColumn, rows) {
    var values = _.map(rows, function (row) {
        return row.valueAtName(headerColumn)
    });
    return _.uniqWith(values, _.isEqual);
}
function removeElements(headers, headerColumn, valueColumn) {
    return _.filter(headers, function (header) {
        return header !== headerColumn && header !== valueColumn;
    });
}
function pivot(table, headerColumn, valueColumn) {
    var headers = _.concat(
        removeElements(table.header, headerColumn, valueColumn),
        uniqValues(headerColumn, table.rows));
    return new Table(headers, table.rows);
}
module.exports = { pivot: pivot };
