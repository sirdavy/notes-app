(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
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
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            this.addNote();
          });
        }
        displayNotes() {
          const notes2 = this.model.getNotes();
          notes2.forEach((note) => {
            const newDivNote = document.createElement("div");
            newDivNote.textContent = note;
            newDivNote.id = "note";
            this.mainContainerEl.append(newDivNote);
          });
        }
        addNote() {
          const inputEl = document.querySelector("#new-note-input");
          this.model.addNote(inputEl.value);
          this.displayNotes();
          inputEl.value = null;
          this.model.reset();
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var notes = new NotesView(model);
})();
