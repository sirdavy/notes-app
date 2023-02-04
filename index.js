const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

view.displayNotesFromApi(); //// added yesterday

// //////////// what was added with Leo //////////////////////
// // this block defines the function "brian". One it's own, 
// // it doesn't do anything. But when called below on the instance of the client...
// const brian = (dataReceivedBackFromServer) => {
//   model.array = dataReceivedBackFromServer;
//   console.log(model.getNotes());
//   view.displayNotes();
// }

// // ...sends the brian function to the client. 
// client.loadNotes(brian)
// //////////// what was added with Leo //////////////////////


