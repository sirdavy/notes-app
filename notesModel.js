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

  reset() {
    this.array = [];
  }

}

module.exports = NotesModel;

