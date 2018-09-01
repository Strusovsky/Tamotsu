
// Tamotsu.onInitialized(() => { });
// Tamotsu.initialize();

// const Agent = Tamotsu.Table.define({sheetName:"test"},{validate:(on)=>{console.log(on)}})

SpreadsheetApp.getActive()

Tamotsu.onInitialized(() => { });
const Agent = Tamotsu.Table.define();
const res = Agent.where((model)=>{
  model.destroy();
  
})
// Table.



// Tamotsu.Table.define();