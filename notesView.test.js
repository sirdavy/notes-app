/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Arrange - instantiate our View class
    const myModel = new NotesModel();
    const myView = new NotesView(myModel);
    myModel.addNote('Sell the cow.');
    myModel.addNote('Milk the bull.');

    myView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  
  });

});