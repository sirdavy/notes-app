class NotesView {

  constructor(model, client) {
    this.model = model;
    this.client = client;

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


  displayNotesFromApi() { 
    this.client.loadNotes((notes) => {                                          
      this.model.setNotes(notes); 
      this.displayNotes(); 
    })

}


async addNote() {
  const inputEl = document.querySelector('#new-note-input');
  await this.client.createNote(inputEl.value);
  inputEl.value = null;
  document.location.reload()
  }

  displayError() {
    const newDivError = document.createElement('div');
      newDivError.textContent = "Oops, something went wrong!";
      newDivError.id = 'error';
      this.mainContainerEl.append(newDivError);

  }



}



module.exports = NotesView;