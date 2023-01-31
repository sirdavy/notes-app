const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// console.log('The notes app is running')

const model = new NotesModel();
    // model.addNote('Buy milk');
    // model.addNote('Go to the gym');

// console.log(model.getNotes());

const notes = new NotesView(model)

// notes.displayNotes()