/**
 *
 * Object-Spreadsheet Mapping for Google Apps Script
 * <br>Project key `1OiJIgWlrg_DFHFYX_SoaEzhFJPCmwbbfEHEqYEfLEEhKRloTNVJ-3U4s`
 * @namespace Tamotsu
 */

/* exported initialize, onInitialized */
/* exported ss_, Table, Relation_, callbacks_ */ // Defined in the module
/* global createTable_, createRelation_ */ // Defined outside

var ss_;
var Table;
var Relation_;
var callbacks_ = [];

/**
 * Initializes Tamotsu with the given objects.
 * You have to invoke this method before using Tamotsu.Table.
 *
 * @example
 * Tamotsu.initialize();
 *
 * @memberof Tamotsu
 * @param {Spreadsheet} [spreadsheet] A spreadsheet object you will handle.
 * If nothing is given, it uses `SpreadsheetApp.getActive()` instead.
 */
function initialize(spreadsheet) {
  ss_ = spreadsheet || SpreadsheetApp.getActive();
  Table = createTable_();
  Relation_ = createRelation_();
  callbacks_.forEach(function(callback) {
    callback(spreadsheet);
  });
}

/**
 * Register the given function as a callback on initialized
 *
 * @example
 * // You can isolate table definitions from main code with this method.
 * var Agent;
 * Tamotsu.onInitialized(function() {
 *   Agent = Tamotsu.Table.define({ sheetName: 'Agents' });
 * });
 *
 * function main() {
 *   Tamotsu.initialize();
 *   Logger.log(Agent.first());
 * }
 *
 * @memberof Tamotsu
 * @param {Tamotsu~onInitializedCallback} callback A function that is to be added to the callback list.
 */
function onInitialized(callback) {
  callbacks_.push(callback);
}

/**
 * This callback is a function that to be added to the callback list
 *
 * @callback Tamotsu~onInitializedCallback
 * @param {...*} [params] Only user defined params and global variables are available
 */
