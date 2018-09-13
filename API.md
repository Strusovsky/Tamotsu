<!-- markdownlint-disable -->
## Objects

<dl>
<dt><a href="#Tamotsu">Tamotsu</a> : <code>object</code></dt>
<dd><p>Object-Spreadsheet Mapping for Google Apps Script
<br>Project key <code>1OiJIgWlrg_DFHFYX_SoaEzhFJPCmwbbfEHEqYEfLEEhKRloTNVJ-3U4s</code></p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RelativeObjects">RelativeObjects</a> : <code>Object</code></dt>
<dd><p>Something like <code>Tamotsu.Table</code>, but this is an unreal interface.</p>
</dd>
</dl>

<a name="Tamotsu"></a>

## Tamotsu : <code>object</code>
Object-Spreadsheet Mapping for Google Apps Script
<br>Project key `1OiJIgWlrg_DFHFYX_SoaEzhFJPCmwbbfEHEqYEfLEEhKRloTNVJ-3U4s`

**Kind**: global namespace  

* [Tamotsu](#Tamotsu) : <code>object</code>
    * _static_
        * [.Model](#Tamotsu.Model)
            * [.save()](#Tamotsu.Model.save)
            * [.destroy()](#Tamotsu.Model.destroy)
            * [.validate()](#Tamotsu.Model.validate)
            * [.isValid()](#Tamotsu.Model.isValid)
            * [.isNewRecord()](#Tamotsu.Model.isNewRecord)
        * [.Table](#Tamotsu.Table)
            * _static_
                * [.sheet()](#Tamotsu.Table.sheet) ⇒ <code>SpreadsheetApp.Sheet</code>
                * [.first()](#Tamotsu.Table.first) ⇒ <code>[Model](#Tamotsu.Model)</code>
                * [.last()](#Tamotsu.Table.last) ⇒ <code>[Model](#Tamotsu.Model)</code>
                * [.find(id)](#Tamotsu.Table.find) ⇒ <code>[Model](#Tamotsu.Model)</code>
                * [.all()](#Tamotsu.Table.all) ⇒ <code>[Array.&lt;Model&gt;](#Tamotsu.Model)</code>
                * [.pluck(column)](#Tamotsu.Table.pluck) ⇒ <code>Array.&lt;object&gt;</code>
                * [.sum(column)](#Tamotsu.Table.sum) ⇒ <code>number</code>
                * [.max(column)](#Tamotsu.Table.max) ⇒ <code>number</code>
                * [.min(column)](#Tamotsu.Table.min) ⇒ <code>number</code>
                * [.where(predicate)](#Tamotsu.Table.where) ⇒ <code>[RelativeObjects](#RelativeObjects)</code>
                * [.order(comparator)](#Tamotsu.Table.order) ⇒ <code>[RelativeObjects](#RelativeObjects)</code>
                * [.columns()](#Tamotsu.Table.columns) ⇒ <code>Array.&lt;object&gt;</code>
                * [.columnIndexOf(column)](#Tamotsu.Table.columnIndexOf) ⇒ <code>number</code>
                * [.columnABCFor(column)](#Tamotsu.Table.columnABCFor) ⇒ <code>number</code>
                * [.dataRange()](#Tamotsu.Table.dataRange)
                * [.rangeByRow()](#Tamotsu.Table.rangeByRow)
                * [.objectFrom()](#Tamotsu.Table.objectFrom)
                * [.valuesFrom()](#Tamotsu.Table.valuesFrom)
                * [.allValues()](#Tamotsu.Table.allValues)
                * [.create()](#Tamotsu.Table.create)
                * [.update()](#Tamotsu.Table.update)
                * [.destroy()](#Tamotsu.Table.destroy)
                * [.withNextId()](#Tamotsu.Table.withNextId)
                * [.idValues()](#Tamotsu.Table.idValues)
                * [.idColumnIndex()](#Tamotsu.Table.idColumnIndex)
                * [.Table.define(id)](#Tamotsu.Table.Table.define) ⇒ <code>[Model](#Tamotsu.Model)</code>
            * _inner_
                * [~predicateCallback](#Tamotsu.Table..predicateCallback) ⇒ <code>boolean</code>
                * [~comparatorCallback](#Tamotsu.Table..comparatorCallback) ⇒ <code>boolean</code>
        * [.Model](#Tamotsu.Model)
            * [.save()](#Tamotsu.Model.save)
            * [.destroy()](#Tamotsu.Model.destroy)
            * [.validate()](#Tamotsu.Model.validate)
            * [.isValid()](#Tamotsu.Model.isValid)
            * [.isNewRecord()](#Tamotsu.Model.isNewRecord)
        * [.initialize([spreadsheet])](#Tamotsu.initialize)
        * [.onInitialized(callback)](#Tamotsu.onInitialized)
    * _inner_
        * [~onInitializedCallback](#Tamotsu..onInitializedCallback) : <code>function</code>

<a name="Tamotsu.Model"></a>

### Tamotsu.Model
**Kind**: static interface of <code>[Tamotsu](#Tamotsu)</code>  

* [.Model](#Tamotsu.Model)
    * [.save()](#Tamotsu.Model.save)
    * [.destroy()](#Tamotsu.Model.destroy)
    * [.validate()](#Tamotsu.Model.validate)
    * [.isValid()](#Tamotsu.Model.isValid)
    * [.isNewRecord()](#Tamotsu.Model.isNewRecord)

<a name="Tamotsu.Model.save"></a>

#### Model.save()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.destroy"></a>

#### Model.destroy()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.validate"></a>

#### Model.validate()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.isValid"></a>

#### Model.isValid()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.isNewRecord"></a>

#### Model.isNewRecord()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Table"></a>

### Tamotsu.Table
**Kind**: static class of <code>[Tamotsu](#Tamotsu)</code>  

* [.Table](#Tamotsu.Table)
    * _static_
        * [.sheet()](#Tamotsu.Table.sheet) ⇒ <code>SpreadsheetApp.Sheet</code>
        * [.first()](#Tamotsu.Table.first) ⇒ <code>[Model](#Tamotsu.Model)</code>
        * [.last()](#Tamotsu.Table.last) ⇒ <code>[Model](#Tamotsu.Model)</code>
        * [.find(id)](#Tamotsu.Table.find) ⇒ <code>[Model](#Tamotsu.Model)</code>
        * [.all()](#Tamotsu.Table.all) ⇒ <code>[Array.&lt;Model&gt;](#Tamotsu.Model)</code>
        * [.pluck(column)](#Tamotsu.Table.pluck) ⇒ <code>Array.&lt;object&gt;</code>
        * [.sum(column)](#Tamotsu.Table.sum) ⇒ <code>number</code>
        * [.max(column)](#Tamotsu.Table.max) ⇒ <code>number</code>
        * [.min(column)](#Tamotsu.Table.min) ⇒ <code>number</code>
        * [.where(predicate)](#Tamotsu.Table.where) ⇒ <code>[RelativeObjects](#RelativeObjects)</code>
        * [.order(comparator)](#Tamotsu.Table.order) ⇒ <code>[RelativeObjects](#RelativeObjects)</code>
        * [.columns()](#Tamotsu.Table.columns) ⇒ <code>Array.&lt;object&gt;</code>
        * [.columnIndexOf(column)](#Tamotsu.Table.columnIndexOf) ⇒ <code>number</code>
        * [.columnABCFor(column)](#Tamotsu.Table.columnABCFor) ⇒ <code>number</code>
        * [.dataRange()](#Tamotsu.Table.dataRange)
        * [.rangeByRow()](#Tamotsu.Table.rangeByRow)
        * [.objectFrom()](#Tamotsu.Table.objectFrom)
        * [.valuesFrom()](#Tamotsu.Table.valuesFrom)
        * [.allValues()](#Tamotsu.Table.allValues)
        * [.create()](#Tamotsu.Table.create)
        * [.update()](#Tamotsu.Table.update)
        * [.destroy()](#Tamotsu.Table.destroy)
        * [.withNextId()](#Tamotsu.Table.withNextId)
        * [.idValues()](#Tamotsu.Table.idValues)
        * [.idColumnIndex()](#Tamotsu.Table.idColumnIndex)
        * [.Table.define(id)](#Tamotsu.Table.Table.define) ⇒ <code>[Model](#Tamotsu.Model)</code>
    * _inner_
        * [~predicateCallback](#Tamotsu.Table..predicateCallback) ⇒ <code>boolean</code>
        * [~comparatorCallback](#Tamotsu.Table..comparatorCallback) ⇒ <code>boolean</code>

<a name="Tamotsu.Table.sheet"></a>

#### Table.sheet() ⇒ <code>SpreadsheetApp.Sheet</code>
Returns Sheet

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>SpreadsheetApp.Sheet</code> - The sheet of Table tytyt  
<a name="Tamotsu.Table.first"></a>

#### Table.first() ⇒ <code>[Model](#Tamotsu.Model)</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>[Model](#Tamotsu.Model)</code> - The Model  
<a name="Tamotsu.Table.last"></a>

#### Table.last() ⇒ <code>[Model](#Tamotsu.Model)</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>[Model](#Tamotsu.Model)</code> - The Model  
<a name="Tamotsu.Table.find"></a>

#### Table.find(id) ⇒ <code>[Model](#Tamotsu.Model)</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>[Model](#Tamotsu.Model)</code> - The Model  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Tamotsu.Table.all"></a>

#### Table.all() ⇒ <code>[Array.&lt;Model&gt;](#Tamotsu.Model)</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>[Array.&lt;Model&gt;](#Tamotsu.Model)</code> - All Models  
<a name="Tamotsu.Table.pluck"></a>

#### Table.pluck(column) ⇒ <code>Array.&lt;object&gt;</code>
Returns array

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Array.&lt;object&gt;</code> - Array  

| Param | Type |
| --- | --- |
| column | <code>number</code> | 

<a name="Tamotsu.Table.sum"></a>

#### Table.sum(column) ⇒ <code>number</code>
Returns sum

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>number</code> - The sum  

| Param | Type |
| --- | --- |
| column | <code>number</code> | 

<a name="Tamotsu.Table.max"></a>

#### Table.max(column) ⇒ <code>number</code>
Returns max

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>number</code> - The sum  

| Param | Type |
| --- | --- |
| column | <code>number</code> | 

<a name="Tamotsu.Table.min"></a>

#### Table.min(column) ⇒ <code>number</code>
Returns min

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>number</code> - The sum  

| Param | Type |
| --- | --- |
| column | <code>number</code> | 

<a name="Tamotsu.Table.where"></a>

#### Table.where(predicate) ⇒ <code>[RelativeObjects](#RelativeObjects)</code>
Returns the relation object which meets the given conditions.

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>object</code> &#124; <code>[predicateCallback](#Tamotsu.Table..predicateCallback)</code> | a condition object or predicate function |

**Example**  
```js
// Object condition
var men = Agent.where({ Gender: 'Male' }).all();
Logger.log(men); //=> [{#=1.0, First Name=Charles...}, {#=3.0, First Name=John...}

// Function condition
var highPay = Agent.where(function(agent) { return agent['Salary'] > 150; })
  .all();
Logger.log(highPay); //=> [{#=2.0, First Name=Sarah...}, {#=3.0, First Name=John...}]

// For sure where returns not models
// but a relation object that is to be chained with other scope functions,
// so you can get the records in such an elegant way.
Agent.where(condition1).where(condition2).order(comparator).all();
```
<a name="Tamotsu.Table.order"></a>

#### Table.order(comparator) ⇒ <code>[RelativeObjects](#RelativeObjects)</code>
Returns the relation object which meets the given sort order.

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  

| Param | Type | Description |
| --- | --- | --- |
| comparator | <code>string</code> &#124; <code>[comparatorCallback](#Tamotsu.Table..comparatorCallback)</code> | a column name (supports `ASC`/`DESC`) or comparator function |

**Example**  
```js
// Object comparator
var asc = Agent.order('Salary').all();
Logger.log(asc); //=> [{#=1.0, Salary=100...}, {#=3.0, Salary=200...}, {#=2.0, Salary=300}]

// Supports ASC/DESC
var desc = Agent.order('Salary DESC').all();
Logger.log(desc); //=> [{#=2.0, Salary=300...}, {#=3.0, Salary=200...}, {#=1.0, Salary=100}]

// Function comparator
Agent.order(function(agent1, agent2) {
  // complex comparator
  return agent2['First Name'].length - agent1['First Name'].length;
}).all();
```
<a name="Tamotsu.Table.columns"></a>

#### Table.columns() ⇒ <code>Array.&lt;object&gt;</code>
Returns columns

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Array.&lt;object&gt;</code> - columns  
<a name="Tamotsu.Table.columnIndexOf"></a>

#### Table.columnIndexOf(column) ⇒ <code>number</code>
Returns columnIndexOf

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>number</code> - column Index Of  

| Param | Type |
| --- | --- |
| column | <code>number</code> | 

<a name="Tamotsu.Table.columnABCFor"></a>

#### Table.columnABCFor(column) ⇒ <code>number</code>
Returns columnIndexOf

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>number</code> - column Index Of  

| Param | Type |
| --- | --- |
| column | <code>number</code> | 

<a name="Tamotsu.Table.dataRange"></a>

#### Table.dataRange()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.rangeByRow"></a>

#### Table.rangeByRow()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.objectFrom"></a>

#### Table.objectFrom()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.valuesFrom"></a>

#### Table.valuesFrom()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.allValues"></a>

#### Table.allValues()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.create"></a>

#### Table.create()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.update"></a>

#### Table.update()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.destroy"></a>

#### Table.destroy()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.withNextId"></a>

#### Table.withNextId()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.idValues"></a>

#### Table.idValues()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.idColumnIndex"></a>

#### Table.idColumnIndex()
TODO:

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.Table.define"></a>

#### Table.Table.define(id) ⇒ <code>[Model](#Tamotsu.Model)</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>[Model](#Tamotsu.Model)</code> - The Model  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Tamotsu.Table..predicateCallback"></a>

#### Table~predicateCallback ⇒ <code>boolean</code>
This callback is a function that to be added to the callback list

**Kind**: inner typedef of <code>[Table](#Tamotsu.Table)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [...params] | <code>\*</code> | Only user defined params and global variables are available |

<a name="Tamotsu.Table..comparatorCallback"></a>

#### Table~comparatorCallback ⇒ <code>boolean</code>
This callback is a function that to be added to the callback list

**Kind**: inner typedef of <code>[Table](#Tamotsu.Table)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modelA | <code>[Model](#Tamotsu.Model)</code> | The first value for comapre |
| modelB | <code>[Model](#Tamotsu.Model)</code> | The second value for comapre |

<a name="Tamotsu.Model"></a>

### Tamotsu.Model
**Kind**: static class of <code>[Tamotsu](#Tamotsu)</code>  

* [.Model](#Tamotsu.Model)
    * [.save()](#Tamotsu.Model.save)
    * [.destroy()](#Tamotsu.Model.destroy)
    * [.validate()](#Tamotsu.Model.validate)
    * [.isValid()](#Tamotsu.Model.isValid)
    * [.isNewRecord()](#Tamotsu.Model.isNewRecord)

<a name="Tamotsu.Model.save"></a>

#### Model.save()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.destroy"></a>

#### Model.destroy()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.validate"></a>

#### Model.validate()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.isValid"></a>

#### Model.isValid()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.Model.isNewRecord"></a>

#### Model.isNewRecord()
Introduce yourself.

**Kind**: static method of <code>[Model](#Tamotsu.Model)</code>  
<a name="Tamotsu.initialize"></a>

### Tamotsu.initialize([spreadsheet])
Initializes Tamotsu with the given objects.
You have to invoke this method before using Tamotsu.Table.

**Kind**: static method of <code>[Tamotsu](#Tamotsu)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [spreadsheet] | <code>Spreadsheet</code> | A spreadsheet object you will handle. If nothing is given, it uses `SpreadsheetApp.getActive()` instead. |

**Example**  
```js
Tamotsu.initialize();
```
<a name="Tamotsu.onInitialized"></a>

### Tamotsu.onInitialized(callback)
Register the given function as a callback on initialized

**Kind**: static method of <code>[Tamotsu](#Tamotsu)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[onInitializedCallback](#Tamotsu..onInitializedCallback)</code> | A function that is to be added to the callback list. |

**Example**  
```js
// You can isolate table definitions from main code with this method.
var Agent;
Tamotsu.onInitialized(function() {
  Agent = Tamotsu.Table.define({ sheetName: 'Agents' });
});

function main() {
  Tamotsu.initialize();
  Logger.log(Agent.first());
}
```
<a name="Tamotsu..onInitializedCallback"></a>

### Tamotsu~onInitializedCallback : <code>function</code>
This callback is a function that to be added to the callback list

**Kind**: inner typedef of <code>[Tamotsu](#Tamotsu)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [...params] | <code>\*</code> | Only user defined params and global variables are available |

<a name="RelativeObjects"></a>

## RelativeObjects : <code>Object</code>
Something like `Tamotsu.Table`, but this is an unreal interface.

**Kind**: global typedef  
**Example**  
```js
// It has the next structure of types
{
  comparator: object,
  predicates: object[],
  Table:Tamotsu.Table
}
```
