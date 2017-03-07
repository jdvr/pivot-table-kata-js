const Table = require('../domain/table.js');
const Row = require('../domain/row.js');
const Cell = require('../domain/cell.js');
const flow = require('lodash/fp').flow;
const map = require('lodash/fp').map;
const filter = require('lodash/fp').filter;
const uniqWith = require('lodash/fp').uniqWith;
const isEqual = require('lodash/fp').isEqual;
const concat = require('lodash/fp').concat;

const distinctValues = mapFunction => flow(
    map(mapFunction),
    uniqWith(isEqual)
);

function pivot(table, headerColumn, valueColumn) {

    const headers = concat(
        filter(header => header !== headerColumn && header !== valueColumn)(table.header),
        distinctValues(row => row.valueAtName(headerColumn))(table.rows)
    );
    return new Table(headers, table.rows);
}
module.exports = { pivot: pivot };
