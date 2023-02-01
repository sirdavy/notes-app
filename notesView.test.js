/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const myModel = new NotesModel();
    const myView = new NotesView(myModel);
    myModel.addNote('Sell the cow.');
    myModel.addNote('Milk the bull.');

    myView.displayNotes();

    expect(document.querySelectorAll('#note').length).toBe(2);
  
  });


  it('displays two notes on page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const myModel = new NotesModel();
    const myView = new NotesView(myModel);

    const buttonEl = document.querySelector('#add-note-button');
    const inputEl = document.querySelector('#new-note-input');
    inputEl.value = 'Sell the cow.'
    buttonEl.click();
    myView.displayNotes();
    expect(document.querySelector('#note').textContent).toEqual('Sell the cow.');
  
  });

});