/**
 * @class Tamotsu.Table
 */

/**
 * @class Tamotsu.Model
 */

/* exported createTable_ */ // Defined in the module
/* global ss_, Relation_ */ // Defined outside

var createTable_ = function() {
  var Table = function(attributes, options) {
    options = options || {};
    this.row_ = options.row_;

    attributes = attributes || {};
    var that = this;
    this.__class.columns().forEach(function(c) {
      that[c] = attributes[c];
    });
  };

  Object.assign(Table, {
    /**
     * Returns Sheet
     *
     * @memberof Tamotsu.Table
     * @returns {SpreadsheetApp.Sheet} The sheet of Table tytyt
     */
    sheet: function() {
      if (!this.sheet_memo_) {
        this.sheet_memo_ = ss_.getSheetByName(this.sheetName);
      }
      return this.sheet_memo_;
    },

    /**
     * Returns Model
     *
     * @memberof Tamotsu.Table
     * @returns {Tamotsu.Model} The Model
     */
    first: function() {
      var values = this.allValues();
      if (values.length === 0) return null;
      return new this(this.objectFrom(values[0]), { row_: 2 });
    },

    /**
     * Returns Model
     *
     * @memberof Tamotsu.Table
     * @returns {Tamotsu.Model} The Model
     */
    last: function() {
      var values = this.allValues();
      if (values.length === 0) return null;
      return new this(this.objectFrom(values[values.length - 1]), {
        row_: values.length + 1
      });
    },

    /**
     * Returns Model
     *
     * @memberof Tamotsu.Table
     * @param {number} id
     * @returns {Tamotsu.Model} The Model
     */
    find: function(id) {
      var values = this.allValues();
      for (var i = 0; i < values.length; i++) {
        if (values[i][this.idColumnIndex()] === id) {
          return new this(this.objectFrom(values[i]), { row_: i + 2 });
        }
      }
      throw 'Record not found [id=' + id + ']';
    },

    /**
     * Returns Model
     *
     * @memberof Tamotsu.Table
     * @returns {Tamotsu.Model[]} All Models
     */
    all: function() {
      var records = [];
      var that = this;
      this.allValues().forEach(function(values, i) {
        records.push(new that(that.objectFrom(values), { row_: i + 2 }));
      });
      return records;
    },

    /**
     * Returns array
     *
     * @memberof Tamotsu.Table
     * @param {number} column
     * @returns {object[]} Array
     */
    pluck: function(column) {
      var result = [];
      var that = this;
      this.allValues().forEach(function(values) {
        result.push(values[that.columnIndexOf(column)]);
      });
      return result;
    },

    /**
     * Returns sum
     *
     * @memberof Tamotsu.Table
     * @param {number} column
     * @returns {number} The sum
     */
    sum: function(column) {
      var total = 0;
      var that = this;
      this.allValues().forEach(function(values) {
        total += Number(values[that.columnIndexOf(column)]);
      });
      return total;
    },

    /**
     * Returns max
     *
     * @memberof Tamotsu.Table
     * @param {number} column
     * @returns {number} The sum
     */
    max: function(column) {
      return Math.max.apply(null, this.pluck(column));
    },

    /**
     * Returns min
     *
     * @memberof Tamotsu.Table
     * @param {number} column
     * @returns {number} The sum
     */
    min: function(column) {
      return Math.min.apply(null, this.pluck(column));
    },

    /**
     * Returns the relation object which meets the given conditions.
     *
     * @memberof Tamotsu.Table
     *
     * @example
     * // Object condition
     * var men = Agent.where({ Gender: 'Male' }).all();
     * Logger.log(men); //=> [{#=1.0, First Name=Charles...}, {#=3.0, First Name=John...}
     *
     * // Function condition
     * var highPay = Agent.where(function(agent) { return agent['Salary'] > 150; })
     *   .all();
     * Logger.log(highPay); //=> [{#=2.0, First Name=Sarah...}, {#=3.0, First Name=John...}]
     *
     * // For sure where returns not models
     * // but a relation object that is to be chained with other scope functions,
     * // so you can get the records in such an elegant way.
     * Agent.where(condition1).where(condition2).order(comparator).all();
     *
     * @param {object|Tamotsu.Table~predicateCallback} predicate
     * a condition object or predicate function
     * @returns {Tamotsu.Table}
     */
    where: function(predicate) {
      var r = new Relation_(this);
      return r.where(predicate);
    },

    /**
     * Returns the relation object which meets the given sort order.
     *
     * @memberof Tamotsu.Table
     *
     * @example
     * // Object comparator
     * var asc = Agent.order('Salary').all();
     * Logger.log(asc); //=> [{#=1.0, Salary=100...}, {#=3.0, Salary=200...}, {#=2.0, Salary=300}]
     *
     * // Supports ASC/DESC
     * var desc = Agent.order('Salary DESC').all();
     * Logger.log(desc); //=> [{#=2.0, Salary=300...}, {#=3.0, Salary=200...}, {#=1.0, Salary=100}]
     *
     * // Function comparator
     * Agent.order(function(agent1, agent2) {
     *   // complex comparator
     *   return agent2['First Name'].length - agent1['First Name'].length;
     * }).all();
     *
     * @param {string|Tamotsu.Table~comparatorCallback} comparator
     * a column name (supports `ASC`/`DESC`) or comparator function
     * @returns {Tamotsu.Table}
     */
    order: function(comparator) {
      var r = new Relation_(this);
      return r.order(comparator);
    },

    /**
     * Returns columns
     *
     * @memberof Tamotsu.Table
     * @returns {object[]} columns
     */
    columns: function() {
      if (!this.columns_memo_) {
        this.columns_memo_ = this.dataRange()
          .offset(0, 0, 1)
          .getValues()[0];
      }
      return this.columns_memo_;
    },

    /**
     * Returns columnIndexOf
     *
     * @memberof Tamotsu.Table
     * @param {number} column
     * @returns {number} column Index Of
     */
    columnIndexOf: function(column) {
      var index = this.columns().indexOf(column);
      if (index === -1) throw 'Invalid column given!';
      return index;
    },

    /**
     * Returns columnIndexOf
     *
     * @memberof Tamotsu.Table
     * @param {number} column
     * @returns {number} column Index Of
     */
    columnABCFor: function(column) {
      return indexToABC(this.columnIndexOf(column) + 1);
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    dataRange: function() {
      return this.sheet().getDataRange();
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    rangeByRow: function(row_) {
      return this.dataRange().offset(row_ - 1, 0, 1);
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    objectFrom: function(values) {
      var obj = {};
      this.columns().forEach(function(c, i) {
        obj[c] = values[i];
      });
      return obj;
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    valuesFrom: function(record) {
      var values = [];
      this.columns().forEach(function(c, i) {
        values.push(record[c] == undefined ? null : record[c]);
      });
      return values;
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    allValues: function() {
      var allValues = this.dataRange().getValues();
      allValues.shift();
      return allValues;
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    create: function(recordOrAttributes) {
      var record =
        recordOrAttributes.__class === this
          ? recordOrAttributes
          : new this(recordOrAttributes);
      delete record.row_;
      if (record.isValid()) {
        var values = this.valuesFrom(record);
        var that = this;
        this.withNextId(function(nextId) {
          values[that.idColumnIndex()] = nextId;
          var row = that.sheet().getLastRow() + 1;
          that
            .sheet()
            .getRange(row, 1, 1, that.columns().length)
            .setValues([values]);
          record.row_ = row;
          record[that.idColumn] = nextId;
        });
        return record;
      }
      return false;
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    update: function(record) {
      if (record.isValid()) {
        var values = this.valuesFrom(record);
        this.rangeByRow(record.row_).setValues([values]);
        return true;
      }
      return false;
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    destroy: function(record) {
      this.sheet().deleteRow(record.row_);
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    withNextId: function(callback) {
      var ids = this.idValues();
      var nextId = ids.length > 0 ? Math.max.apply(null, ids) + 1 : 1;
      callback(nextId);
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    idValues: function() {
      var idValues = [];
      var that = this;
      this.allValues().forEach(function(values) {
        idValues.push(values[that.idColumnIndex()]);
      });
      return idValues;
    },

    /**
     * TODO:
     *
     * @memberof Tamotsu.Table
     *
     */
    idColumnIndex: function() {
      if (!this.idColumnIndex_memo_) {
        var i = this.columns().indexOf(this.idColumn);
        if (i === -1)
          throw 'Not found id column "' +
            this.idColumn +
            '" on ' +
            this.sheet().getName();
        this.idColumnIndex_memo_ = i;
      }
      return this.idColumnIndex_memo_;
    }
  });

  Object.defineProperties(Table.prototype, {
    /**
     * Introduce yourself.
     * @name Tamotsu.Model.save
     * @function
     */
    save: {
      value: function() {
        this.errors = {};
        var updateOrCreate = this.isNewRecord() ? 'create' : 'update';
        return this.__class[updateOrCreate](this);
      }
    },
    /**
     * Introduce yourself.
     * @name Tamotsu.Model.destroy
     * @function
     */
    destroy: {
      value: function() {
        this.__class.destroy(this);
      }
    },
    /**
     * Introduce yourself.
     * @name Tamotsu.Model.validate
     * @function
     */
    validate: {
      value: function(on) {
        // override it if you need
      }
    },
    /**
     * Introduce yourself.
     * @name Tamotsu.Model.isValid
     * @function
     */
    isValid: {
      value: function() {
        this.errors = {};
        this.validate(this.isNewRecord() ? 'create' : 'update');
        return noKeys(this.errors);
      }
    },
    /**
     * Introduce yourself.
     * @name Tamotsu.Model.isNewRecord
     * @function
     */
    isNewRecord: {
      value: function() {
        return !this.row_;
      }
    }
  });

  /**
   * Returns Model
   *
   * @memberof Tamotsu.Table
   * @param {number} id
   * @returns {Tamotsu.Model} The Model
   */
  Table.define = function(classProps, instanceProps) {
    var Parent = this;
    var Child = function() {
      return Parent.apply(this, arguments);
    };
    Object.assign(Child, Parent);
    Child.prototype = Object.create(Parent.prototype);
    Object.defineProperties(Child.prototype, {
      __class: { value: Child },
      constructor: { value: Child }
    });
    for (var name in instanceProps) {
      Object.defineProperty(Child.prototype, name, {
        value: instanceProps[name]
      });
    }

    Object.assign(Child, Object.assign({ idColumn: '#' }, classProps));

    return Child;
  };
  /**
   * @private
   * @param index
   */
  var indexToABC = function(index) {
    var n = index - 1;
    var ordA = 'A'.charCodeAt(0);
    var ordZ = 'Z'.charCodeAt(0);
    var len = ordZ - ordA + 1;

    var s = '';
    while (n >= 0) {
      s = String.fromCharCode((n % len) + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s;
  };

  /**
   * @private
   * @param object
   */
  var noKeys = function(object) {
    return Object.keys(object || {}).length === 0;
  };
  return Table;
};

/**
 * This callback is a function that to be added to the callback list
 *
 * @callback Tamotsu.Table~predicateCallback
 * @param {...*} [params] Only user defined params and global variables are available
 * @returns {boolean}
 */

/**
 * This callback is a function that to be added to the callback list
 *
 * @callback Tamotsu.Table~comparatorCallback
 * @param {Tamotsu.Model} modelA The first value for comapre
 * @param {Tamotsu.Model} modelB The second value for comapre
 * @returns {boolean}
 */
