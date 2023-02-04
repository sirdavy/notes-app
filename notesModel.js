class NotesModel {

  constructor() {
    this.array = [];
  }

  getNotes() {
    return this.array;
  }

  addNote(note) {
    this.array.push(note);
  }

  setNotes(notes) { ////added yesterday////
    this.array = notes; ////added yesterday////
  }

  reset() {
    this.array = [];
  }
  

}

module.exports = NotesModel;

