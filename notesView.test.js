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

  it('tests displayError', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = new NotesClient();
    const myModel = new NotesModel();
    mockClient.loadNotes.mockImplementation((onNotesLoaded) => {
      onNotesLoaded(['This is my mocked test note.']);
    });
    const myView = new NotesView(myModel, mockClient);

    myView.displayError();
    expect(document.querySelector('#error').textContent).toBe("Oops, something went wrong!");

  });








});


