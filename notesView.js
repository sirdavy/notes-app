class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      this.addNote();

    });

  }

  displayNotes() {
  
    const notes = this.model.getNotes()

    notes.forEach(note => {
      const newDivNote = document.createElement('div');
      newDivNote.textContent = note;
      newDivNote.id = 'note';
      this.mainContainerEl.append(newDivNote);
    })
  }

  addNote() {
    const inputEl = document.querySelector('#new-note-input');
    this.model.addNote(inputEl.value);
    this.displayNotes();
    inputEl.value = null;
    this.model.reset();
  }

}



module.exports = NotesView;