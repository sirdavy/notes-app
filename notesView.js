class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    const notes = this.model.getNotes()

    notes.forEach(note => {
      const newDivNote = document.createElement('div');
      newDivNote.textContent = note;
      newDivNote.className = 'note';
      this.mainContainerEl.append(newDivNote);
    })
  }

}



module.exports = NotesView;