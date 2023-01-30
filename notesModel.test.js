const NotesModel = require('./notesModel')

describe('NotesModel', () => {

  it('should return empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('should return empty array', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('should return empty array', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset()
    expect(model.getNotes()).toEqual([]);
  });



})


// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return [] 