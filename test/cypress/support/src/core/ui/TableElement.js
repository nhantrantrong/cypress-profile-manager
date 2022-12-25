/// <reference types="Cypress" />

import { allureReporter, webElement, cyUtils } from '../../../../e2e/TestController';
import WebElement from './WebElement';

/**
 * This class is extended from WebElement to develop some method for table interaction
 */
class TableElement extends WebElement {

    // =========================================================================
    // Interaction Methods
    // =========================================================================

    getColumnIndex(table, columnName) {
        let colIndex = 0;
        return webElement.get(table)
            .find('thead tr th')
            .each((column, index) => {
                if (column.text() === columnName) {
                    colIndex = index + 1;

                    // Return false to exit loop
                    return false;
                }
            }).then(() => {
                return colIndex;
            })
    }

    getRowIndex(table, colIndex, value) {
        let rowIndex = 0;
        return webElement.get(table)
            .find('tbody tr')
            .each((row, index) => {
                const cellValue = row.find('td')
                    .eq(colIndex - 1).text()
                if (cellValue == value) {
                    rowIndex = index + 1;

                    // Return false to exit loop
                    return false;
                }
            }).then(() => {
                return rowIndex
            })
    }

    getRowIndexByColumnName(table, colName, value) {
        return this.getColumnIndex(table, colName).then((colIndex) => {
            return this.getRowIndex(table, colIndex, value)
        })
    }

    validateTableCellValue(table, rowIndex, colIndex, value) {
        allureReporter.startStep(`Validate data table value in cell(${rowIndex},${colIndex}) should be: '${value}'`);
        webElement.get(table)
            .find('tbody tr')
            .eq(rowIndex - 1)
            .find('td')
            .eq(colIndex - 1)
            .invoke('text').should('eq', value)
        allureReporter.endStep();
    }

    validateTableCellValueByColumnName(table, rowIndex, colName, value) {
        allureReporter.startStep(`Validate data table value in column '${colName}' at row '${rowIndex}' should be: '${value}'`);
        this.getColumnIndex(table, colName).as('colIndex');
        cyUtils.getAlias('colIndex').then((colIndex) => {
            this.validateTableCellValue(table, rowIndex, colIndex, value);
        })
        allureReporter.endStep();
    }

    validateTableIsEmpty(table) {
        allureReporter.startStep(`Validate data table is empty`);
        webElement.get(table)
            .find('tbody td')
            .should('not.be.visible')
        allureReporter.endStep();
    }
}

export default TableElement;