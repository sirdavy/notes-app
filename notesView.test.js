/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');
require('jest-fetch-mock').enableMocks()

jest.mock('./notesClient'); //// added yesterday


describe('Notes view', () => {
  // it('displays two notes', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const myModel = new NotesModel();
  //   const myView = new NotesView(myModel);
  //   myModel.addNote('Sell the cow.');
  //   myModel.addNote('Milk the bull.');

  //   myView.displayNotes();

  //   expect(document.querySelectorAll('#note').length).toBe(2);
  
  // });


  // it('displays two notes on page',  () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const myClient = new NotesClient()
  //   const myModel = new NotesModel();
  //   const myView = new NotesView(myModel, myClient);

  //   const buttonEl = document.querySelector('#add-note-button');
  //   const inputEl = document.querySelector('#new-note-input');
  //   inputEl.value = 'Sell the cow.'
  //   buttonEl.click();
  //   myView.displayNotes();
  //   expect(document.querySelector('#note').textContent).toEqual('Sell the cow.');
  // });
 

//// this test below added yesterday /////////
  it('tests displayNotesFromApi', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = new NotesClient();
    const myModel = new NotesModel();
    
    mockClient.loadNotes.mockImplementation((onNotesLoaded) => {
      onNotesLoaded(['This is my mocked test note.']);
    });

    const myView = new NotesView(myModel, mockClient);

    myView.displayNotesFromApi();

    expect(document.querySelectorAll('#note').length).toBe(1); 

  });
//// this test above added yesterday /////////


// it('tests displayNotesFromApi', () => {
//   document.body.innerHTML = fs.readFileSync('./index.html');
//   const mockClient = new NotesClient();
//   const myModel = new NotesModel();
//   const inputEl = document.querySelector('#new-note-input');
//   mockClient.createNote.mockImplementation((content) => {
//     content(['This is my mocked test note.']);
//   });

//   const myView = new NotesView(myModel, mockClient);
  

//   myView.displayNotesFromApi();

//   expect(document.querySelectorAll('#note').length).toBe(1); 

// });





});


