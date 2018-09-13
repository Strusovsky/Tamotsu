<a name="Tamotsu"></a>

## Tamotsu : <code>object</code>
**Kind**: global namespace  
**Properties**

| Name | Type |
| --- | --- |
| Table | <code>object</code> | 
| Model | <code>object</code> | 


* [Tamotsu](#Tamotsu) : <code>object</code>
    * _static_
        * [.Table](#Tamotsu.Table) : <code>object</code>
            * [.sheet()](#Tamotsu.Table.sheet) ⇒ <code>SpreadsheetApp.Sheet</code>
            * [.first()](#Tamotsu.Table.first) ⇒ <code>Tamotsu.Model</code>
            * [.last()](#Tamotsu.Table.last) ⇒ <code>Tamotsu.Model</code>
            * [.find(id)](#Tamotsu.Table.find) ⇒ <code>Tamotsu.Model</code>
            * [.all()](#Tamotsu.Table.all) ⇒ <code>Array.&lt;Tamotsu.Model&gt;</code>
            * [.pluck(column)](#Tamotsu.Table.pluck) ⇒ <code>Array.&lt;object&gt;</code>
            * [.sum(column)](#Tamotsu.Table.sum) ⇒ <code>number</code>
            * [.save()](#Tamotsu.Table.save)
            * [.Table.define(id)](#Tamotsu.Table.Table.define) ⇒ <code>Tamotsu.Model</code>
        * [.initialize([spreadsheet])](#Tamotsu.initialize)
        * [.onInitialized(callback)](#Tamotsu.onInitialized)
    * _inner_
        * [~onInitializedCallback](#Tamotsu..onInitializedCallback) : <code>function</code>

<a name="Tamotsu.Table"></a>

### Tamotsu.Table : <code>object</code>
**Kind**: static namespace of <code>[Tamotsu](#Tamotsu)</code>  

* [.Table](#Tamotsu.Table) : <code>object</code>
    * [.sheet()](#Tamotsu.Table.sheet) ⇒ <code>SpreadsheetApp.Sheet</code>
    * [.first()](#Tamotsu.Table.first) ⇒ <code>Tamotsu.Model</code>
    * [.last()](#Tamotsu.Table.last) ⇒ <code>Tamotsu.Model</code>
    * [.find(id)](#Tamotsu.Table.find) ⇒ <code>Tamotsu.Model</code>
    * [.all()](#Tamotsu.Table.all) ⇒ <code>Array.&lt;Tamotsu.Model&gt;</code>
    * [.pluck(column)](#Tamotsu.Table.pluck) ⇒ <code>Array.&lt;object&gt;</code>
    * [.sum(column)](#Tamotsu.Table.sum) ⇒ <code>number</code>
    * [.save()](#Tamotsu.Table.save)
    * [.Table.define(id)](#Tamotsu.Table.Table.define) ⇒ <code>Tamotsu.Model</code>

<a name="Tamotsu.Table.sheet"></a>

#### Table.sheet() ⇒ <code>SpreadsheetApp.Sheet</code>
Returns Sheet

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>SpreadsheetApp.Sheet</code> - The sheet of Table  
<a name="Tamotsu.Table.first"></a>

#### Table.first() ⇒ <code>Tamotsu.Model</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Tamotsu.Model</code> - The Model  
<a name="Tamotsu.Table.last"></a>

#### Table.last() ⇒ <code>Tamotsu.Model</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Tamotsu.Model</code> - The Model  
<a name="Tamotsu.Table.find"></a>

#### Table.find(id) ⇒ <code>Tamotsu.Model</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Tamotsu.Model</code> - The Model  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Tamotsu.Table.all"></a>

#### Table.all() ⇒ <code>Array.&lt;Tamotsu.Model&gt;</code>
Returns Model

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Array.&lt;Tamotsu.Model&gt;</code> - All Models  
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

<a name="Tamotsu.Table.save"></a>

#### Table.save()
Introduce yourself.

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
<a name="Tamotsu.Table.Table.define"></a>

#### Table.Table.define(id) ⇒ <code>Tamotsu.Model</code>
Returns T

**Kind**: static method of <code>[Table](#Tamotsu.Table)</code>  
**Returns**: <code>Tamotsu.Model</code> - The Model  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Tamotsu.initialize"></a>

### Tamotsu.initialize([spreadsheet])
Initializes Tamotsu with the given objects

**Kind**: static method of <code>[Tamotsu](#Tamotsu)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [spreadsheet] | <code>Spreadsheet</code> | Spreadsheet object you will handle.<br>                                    When not given, SpreadsheetApp.getActive() is used. |

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

