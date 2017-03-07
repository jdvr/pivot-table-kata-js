const Table = require('../domain/table.js');
const Row = require('../domain/row.js');
const Cell = require('../domain/cell.js');
const flow = require('lodash/fp').flow;
const map = require('lodash/fp').map;
const filter = require('lodash/fp').filter;
const uniqWith = require('lodash/fp').uniqWith;
const isEqual = require('lodash/fp').isEqual;
const concat = require('lodash/fp').concat;
const reduce = require('lodash/fp').reduce;
const values = require('lodash/fp').values;

const distinctValues = mapFunction => flow(
    map(mapFunction),
    uniqWith(isEqual)
);

function keyCalculatorWith(filterFunction) {
    return flow(
        filter(filterFunction),
        reduce((key, cell) => key + cell.value, "")
    );
}

function pivot(table, headerColumn, valueColumn) {
    const filterCellFunction = cell => cell.name !== headerColumn && cell.name !== valueColumn;
    const keyOf = keyCalculatorWith(filterCellFunction);

    const headers = concat(
        filter(header => header !== headerColumn && header !== valueColumn)(table.header),
        distinctValues(row => row.valueAtName(headerColumn))(table.rows)
    );

    const rows = flow(
        reduce((group, row) => {
            const rowHash = keyOf(row.cells);
            if (!group[rowHash]) {
                group[rowHash] = filter(filterCellFunction)(row.cells);
            }
            group[rowHash].push(new Cell(row.valueAtName(headerColumn), row.valueAtName(valueColumn)));
            return group;
        }, {}),
        map(values),
        map(value => new Row(value))
    )(table.rows);

    return new Table(headers, rows);
}

module.exports = {pivot: pivot};
